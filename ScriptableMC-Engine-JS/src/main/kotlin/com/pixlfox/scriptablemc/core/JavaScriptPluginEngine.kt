package com.pixlfox.scriptablemc.core

import com.pixlfox.scriptablemc.SMCJavaScriptConfig
import com.pixlfox.scriptablemc.ScriptEngineMain
import com.pixlfox.scriptablemc.exceptions.ScriptNotFoundException
import com.pixlfox.scriptablemc.utils.UnzipUtility
import fr.minuskube.inv.InventoryManager
import org.bukkit.Bukkit
import org.bukkit.command.CommandSender
import org.graalvm.polyglot.*
import java.io.File
import java.util.*

@Suppress("MemberVisibilityCanBePrivate", "unused")
class JavaScriptPluginEngine(override val bootstrapPlugin: ScriptEngineMain, private val config: SMCJavaScriptConfig): ScriptablePluginEngine() {

    override val debugEnabled: Boolean = config.debug
    override val graalContext: Context
    override val globalBindings: Value
    override val scriptablePlugins: MutableList<ScriptablePluginContext> = mutableListOf()
    override val inventoryManager: InventoryManager = InventoryManager(bootstrapPlugin)
    private var enabledAllPlugins: Boolean = false

    init {
        if(config.extractLibs) {
            val librariesResource = bootstrapPlugin.getResource("libraries.zip")
            val libFolder = File("${config.rootScriptFolder}/lib")
            if (librariesResource != null && !libFolder.exists()) {
                if(debugEnabled) {
                    bootstrapPlugin.logger.info("Extracting javascript libraries from ScriptableMC-Engine-JS resources to ${libFolder.path}...")
                }
                UnzipUtility.unzip(librariesResource, libFolder)
            }
        }

        var contextBuilder = Context
            .newBuilder("js")
            .allowAllAccess(true)
            .allowExperimentalOptions(true)
            .allowHostAccess(HostAccess.ALL)
            .allowHostClassLoading(true)
            .allowIO(true)
            .allowCreateThread(true)
            .option("js.ecmascript-version", "2020")

        if(config.debugger.enabled) {
            contextBuilder = contextBuilder
                .option("inspect", config.debugger.address)
                .option("inspect.Path", "smc-engine-js")
                .option("inspect.Suspend", "false")
                .option("inspect.Secure", "false")
                .option("inspect.WaitAttached", "${config.debugger.waitAttached}")
        }

        graalContext = contextBuilder.build()

        globalBindings = graalContext.getBindings("js")
    }

    override fun start() {
        instance = this
        inventoryManager.init()
        globalBindings.putMember("engine", this)

        loadAllHelperClasses()

        val mainScriptFile = File("${config.rootScriptFolder}/main.js")
        if(!mainScriptFile.parentFile.exists()) {
            mainScriptFile.parentFile.mkdirs()
        }

        if(mainScriptFile.exists()) {
            val mainReturn = eval(
                Source.newBuilder("js", mainScriptFile)
                    .name("main.js")
                    .mimeType("application/javascript+module")
                    .interactive(false)
                    .build()
            )

            // Load all plugin types returned as an array
            if(mainReturn.hasArrayElements()) {
                for (i in 0 until mainReturn.arraySize) {
                    this.loadPlugin(mainReturn.getArrayElement(i))
                }

                // Enable all plugins if not already enabled
                if(!enabledAllPlugins) {
                    enableAllPlugins()
                }
            }
        }
        else {
            throw ScriptNotFoundException(mainScriptFile)
        }
    }

    override fun close() {
        instance = null
        for(scriptablePlugin in scriptablePlugins) {
            scriptablePlugin.disable()
        }
        scriptablePlugins.clear()

        graalContext.close(true)
    }

    override fun evalFile(filePath: String): Value {
        val scriptFile = File("${config.rootScriptFolder}/$filePath")

        return if(scriptFile.exists()) {
            eval(
                Source.newBuilder("js", scriptFile)
                    .name(scriptFile.name)
                    .mimeType("application/javascript+module")
                    .interactive(false)
                    .build()
            )
        } else {
            throw ScriptNotFoundException(scriptFile)
        }
    }

    override fun evalFile(scriptFile: File): Value {
        return if(scriptFile.exists()) {
            eval(
                Source.newBuilder("js", scriptFile)
                    .name(scriptFile.name)
                    .mimeType("application/javascript+module")
                    .interactive(false)
                    .build()
            )
        } else {
            throw ScriptNotFoundException(scriptFile)
        }
    }

    override fun eval(source: String): Value {
        return graalContext.eval(
            Source.newBuilder("js", source,"${UUID.randomUUID()}.js")
                .mimeType("application/javascript+module")
                .interactive(false)
                .cached(false)
                .build()
        )
    }

    override fun evalCommandSender(source: String, sender: CommandSender): Value {
        val tempScriptFile = File("${config.rootScriptFolder}/${UUID.randomUUID()}.js")
        try {
            tempScriptFile.writeText("import * as lib from './lib/global.js';\n" +
                    "new (class EvalCommandSenderContext {\n" +
                    "    run(sender, server, servicesManager) {\n" +
                    "        $source\n" +
                    "    }\n" +
                    "})()\n")
            val evalCommandSenderContext = evalFile(tempScriptFile)

            evalCommandSenderContext.putMember("sender", sender)
            evalCommandSenderContext.putMember("server", Bukkit.getServer())
            evalCommandSenderContext.putMember("servicesManager", Bukkit.getServicesManager())
            return evalCommandSenderContext.invokeMember("run", sender, Bukkit.getServer(), Bukkit.getServicesManager())
        }
        finally {
            tempScriptFile.delete()
        }
    }

    override fun eval(source: Source): Value {
        return graalContext.eval(source)
    }

    override fun loadPlugin(scriptableClass: Value): ScriptablePluginContext {
        val pluginInstance = scriptableClass.newInstance()
        val pluginName = pluginInstance.getMember("pluginName").asString()
        val pluginContext = JavaScriptPluginContext.newInstance(pluginName, this, pluginInstance)
        pluginInstance.putMember("context", pluginContext)
        scriptablePlugins.add(pluginContext)
        pluginContext.load()
        return pluginContext
    }

    override fun enableAllPlugins() {
        for (pluginContext in scriptablePlugins) {
            pluginContext.enable()
        }
        enabledAllPlugins = true
    }

    override fun enablePlugin(pluginContext: ScriptablePluginContext) {
        pluginContext.enable()
    }

    override fun disablePlugin(pluginContext: ScriptablePluginContext) {
        pluginContext.disable()
    }

    companion object {
        private var inst: JavaScriptPluginEngine? = null
        var instance: JavaScriptPluginEngine?
            internal set(value) { inst = value }
            get() { return inst }
    }
}