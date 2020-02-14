package com.pixlfox.scriptablemc

import co.aikar.commands.PaperCommandManager
import com.pixlfox.scriptablemc.core.ScriptablePluginEngine
import com.smc.version.MinecraftVersion
import org.bukkit.ChatColor
import org.bukkit.command.CommandSender
import org.bukkit.plugin.java.JavaPlugin

abstract class ScriptEngineMain : JavaPlugin() {
    var scriptEngine: ScriptablePluginEngine? = null
    var commandManager: PaperCommandManager? = null
    abstract val chatMessagePrefix: String

    abstract fun reloadScriptEngine(sender: CommandSender? = null)

    fun versionCheck(sender: CommandSender? = null) {
        if(config.getBoolean("version_check", true)) {
            val pluginVersion = "v${description.version}"
            khttp.async.get("https://api.github.com/repos/astorks/ScriptableMC-Engine/releases/latest") {
                val githubReleaseInfo = this.jsonObject
                val releaseTag = githubReleaseInfo.getString("tag_name")
                val latestReleaseVersion = MinecraftVersion.parse(releaseTag.substring(1))
                val currentVersion = MinecraftVersion.parse(pluginVersion.substring(1))
                val releaseLink = githubReleaseInfo.getString("html_url")

                if (currentVersion.isBefore(latestReleaseVersion)) {
                    sender?.sendMessage("$chatMessagePrefix ${ChatColor.YELLOW}An update was found.")
                    sender?.sendMessage("$chatMessagePrefix CurrentVersion: $pluginVersion, LatestRelease: $releaseTag.")
                    sender?.sendMessage("$chatMessagePrefix Download Page: $releaseLink")
                    logger.warning("An update was found. CurrentVersion: $pluginVersion, LatestRelease: $releaseTag")
                    logger.fine("Download Page: $releaseLink")
                }
                else {
                    sender?.sendMessage("$chatMessagePrefix No updates found.")
                    sender?.sendMessage("$chatMessagePrefix CurrentVersion: $pluginVersion, LatestRelease: $releaseTag")
                    if (config.getBoolean("debug", false)) {
                        logger.info("No updates found. CurrentVersion: $pluginVersion, LatestRelease: $releaseTag")
                    }
                }
            }
        }
    }

    companion object {
        private val scriptEngines: MutableMap<String, ScriptEngineMain> = mutableMapOf()
        /**
         * Patches the bukkit class loader to allow for GraalVM class loading from inside plugin jar.
         * A bit hackish but it works.
         * https://stackoverflow.com/questions/56712178/graalvm-no-language-and-polyglot-implementation-was-found-on-the-classpath
         */
        fun patchClassLoader(callback: () -> Unit) {
            val oldCl = Thread.currentThread().contextClassLoader
            Thread.currentThread().contextClassLoader = ScriptEngineMain::class.java.classLoader
            callback()
            Thread.currentThread().contextClassLoader = oldCl
        }

        @JvmStatic
        fun registerScriptEngine(language: String, scriptEngineMain: ScriptEngineMain) {
            scriptEngines[language] = scriptEngineMain
        }

        @JvmStatic
        fun resolveScriptEngine(language: String): ScriptEngineMain? {
            return scriptEngines.getOrDefault(language, null)
        }

        @JvmStatic
        fun getAllScriptEngines(): Array<ScriptEngineMain> {
            return scriptEngines.values.toTypedArray()
        }

        @JvmStatic @JvmOverloads
        fun reloadAllScriptEngines(sender: CommandSender? = null) {
            for(scriptEngine in getAllScriptEngines()) {
                scriptEngine.reloadScriptEngine(sender)
            }
        }
    }
}