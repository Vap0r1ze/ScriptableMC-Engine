declare var Java: any;
import CommandSender from '../../../../org/bukkit/command/CommandSender.js'
import File from '../../../../java/io/File.js'
import InventoryManager from '../../../../fr/minuskube/inv/InventoryManager.js'
import ScriptEngineConfig from '../../../../com/pixlfox/scriptablemc/ScriptEngineConfig.js'
import ScriptEngineMain from '../../../../com/pixlfox/scriptablemc/ScriptEngineMain.js'
import ScriptablePluginContext from './ScriptablePluginContext.js'
import Version from '../../../../com/smc/version/Version.js'

export default interface ScriptablePluginEngine {
	close(): void;
	disableAllPlugins(): void;
	disablePlugin(pluginContext: ScriptablePluginContext): void;
	enableAllPlugins(): void;
	enablePlugin(pluginContext: ScriptablePluginContext): void;
	eval(source: string): any;
	eval(source: any): any;
	evalCommandSender(source: string, sender: CommandSender): any;
	evalFile(filePath: string): any;
	evalFile(scriptFile: File): any;
	getBootstrapPlugin(): ScriptEngineMain;
	getConfig(): ScriptEngineConfig;
	getDebugEnabled(): boolean;
	getEnabledAllPlugins(): boolean;
	getGlobalBindings(): any;
	getGraalContext(): any;
	getInventoryManager(): InventoryManager;
	getLanguageFileExtension(): string;
	getLanguageName(): string;
	getPluginInstance(_name: string): any;
	getPluginInstance(pluginContext: ScriptablePluginContext): any;
	getPluginVersion(): Version;
	getScriptablePlugins(): Array<ScriptablePluginContext>;
	getStartupErrors(): Array<any>;
	loadAllHelperClasses(): void;
	loadMainScript(path: string): void;
	loadPlugin(scriptableClass: any): ScriptablePluginContext;
	start(): void;
}

export default class ScriptablePluginEngine {
	public static get $javaClass(): any {
		return Java.type('com.pixlfox.scriptablemc.core.ScriptablePluginEngine');
	}
	public static $isInstance(obj: any): obj is ScriptablePluginEngine {
		return obj instanceof ScriptablePluginEngine.$javaClass;
	}

	constructor();
	constructor(...args: any[]) {
		return new ScriptablePluginEngine.$javaClass(...args);
	}

	public static access$getPreLoadClasses$cp(): Array<string>;
	public static access$getPreLoadClasses$cp(...args: any[]): any {
		return ScriptablePluginEngine.$javaClass.access$getPreLoadClasses$cp(...args);
	}

}

