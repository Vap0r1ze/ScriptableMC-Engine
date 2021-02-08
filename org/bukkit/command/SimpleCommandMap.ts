declare var Java: any;
import Class from '../../../java/lang/Class.js'
import Collection from '../../../java/util/Collection.js'
import Command from './Command.js'
import CommandMap from './CommandMap.js'
import CommandSender from './CommandSender.js'
import List from '../../../java/util/List.js'
import Location from '../../../org/bukkit/Location.js'
import Object from '../../../java/lang/Object.js'
import Server from '../../../org/bukkit/Server.js'
import String from '../../../java/lang/String.js'

export default interface SimpleCommandMap extends Object, CommandMap {
	clearCommands(): void;
	dispatch(sender: CommandSender, commandLine: string): boolean;
	getCommand(_name: string): Command;
	getCommands(): Array<Command>;
	register(fallbackPrefix: string, command: Command): boolean;
	register(label: string, fallbackPrefix: string, command: Command): boolean;
	registerAll(fallbackPrefix: string, commands: Array<any>): void;
	registerServerAliases(): void;
	setFallbackCommands(): void;
	tabComplete(sender: CommandSender, cmdLine: string): Array<string>;
	tabComplete(sender: CommandSender, cmdLine: string, location: Location): Array<string>;
}

export default class SimpleCommandMap {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.command.SimpleCommandMap');
	}
	public static $isInstance(obj: any): obj is SimpleCommandMap {
		return obj instanceof SimpleCommandMap.$javaClass;
	}

	constructor(server: Server);
	constructor(...args: any[]) {
		return new SimpleCommandMap.$javaClass(...args);
	}

}

