declare var Java: any;
import Class from '../../../java/lang/Class.js'
import Command from './Command.js'
import List from '../../../java/util/List.js'
import Object from '../../../java/lang/Object.js'
import Plugin from '../../../org/bukkit/plugin/Plugin.js'
import String from '../../../java/lang/String.js'

export default class PluginCommandYamlParser {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.command.PluginCommandYamlParser');
	}
	public static $isInstance(obj: any): obj is PluginCommandYamlParser {
		return obj instanceof PluginCommandYamlParser.$javaClass;
	}

	constructor();
	constructor(...args: any[]) {
		return new PluginCommandYamlParser.$javaClass(...args);
	}

	public static parse(plugin: Plugin): Array<Command>;
	public static parse(...args: any[]): any {
		return PluginCommandYamlParser.$javaClass.parse(...args);
	}

}

