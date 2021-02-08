declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import File from '../../../../java/io/File.js'
import Listener from '../../../../org/bukkit/event/Listener.js'
import Map from '../../../../java/util/Map.js'
import Object from '../../../../java/lang/Object.js'
import Pattern from '../../../../java/util/regex/Pattern.js'
import Plugin from '../../../../org/bukkit/plugin/Plugin.js'
import PluginDescriptionFile from '../../../../org/bukkit/plugin/PluginDescriptionFile.js'
import PluginLoader from '../../../../org/bukkit/plugin/PluginLoader.js'
import Server from '../../../../org/bukkit/Server.js'
import String from '../../../../java/lang/String.js'

export default interface JavaPluginLoader extends Object, PluginLoader {
	createRegisteredListeners(listener: Listener, plugin: Plugin): Map;
	disablePlugin(plugin: Plugin): void;
	enablePlugin(plugin: Plugin): void;
	getPluginDescription(file: File): PluginDescriptionFile;
	getPluginFileFilters(): Array<Pattern>;
	loadPlugin(file: File): Plugin;
}

export default class JavaPluginLoader {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.plugin.java.JavaPluginLoader');
	}
	public static $isInstance(obj: any): obj is JavaPluginLoader {
		return obj instanceof JavaPluginLoader.$javaClass;
	}

	constructor(instance: Server);
	constructor(...args: any[]) {
		return new JavaPluginLoader.$javaClass(...args);
	}

	public static get pluginParentTimer(): any {
		return JavaPluginLoader.$javaClass.pluginParentTimer;
	}

}

