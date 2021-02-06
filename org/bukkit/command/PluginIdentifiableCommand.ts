declare var Java: any;
import Plugin from '../../../org/bukkit/plugin/Plugin.js'

export default interface PluginIdentifiableCommand {
	getPlugin(): Plugin;
}

export default class PluginIdentifiableCommand {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.command.PluginIdentifiableCommand');
	}
	public static $isInstance(obj: any): obj is PluginIdentifiableCommand {
		return obj instanceof PluginIdentifiableCommand.$javaClass;
	}

}

