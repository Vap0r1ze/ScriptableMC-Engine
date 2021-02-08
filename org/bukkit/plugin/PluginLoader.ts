declare var Java: any;
import File from '../../../java/io/File.js'
import Listener from '../../../org/bukkit/event/Listener.js'
import Map from '../../../java/util/Map.js'
import Pattern from '../../../java/util/regex/Pattern.js'
import Plugin from './Plugin.js'
import PluginDescriptionFile from './PluginDescriptionFile.js'

export default interface PluginLoader {
	createRegisteredListeners(arg0: Listener, arg1: Plugin): Map;
	disablePlugin(arg0: Plugin): void;
	enablePlugin(arg0: Plugin): void;
	getPluginDescription(arg0: File): PluginDescriptionFile;
	getPluginFileFilters(): Array<Pattern>;
	loadPlugin(arg0: File): Plugin;
}

export default class PluginLoader {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.plugin.PluginLoader');
	}
	public static $isInstance(obj: any): obj is PluginLoader {
		return obj instanceof PluginLoader.$javaClass;
	}

}

