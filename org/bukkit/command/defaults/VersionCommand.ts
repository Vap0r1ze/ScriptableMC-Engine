declare var Java: any;
import BukkitCommand from './BukkitCommand.js'
import Class from '../../../../java/lang/Class.js'
import Command from '../../../../org/bukkit/command/Command.js'
import CommandMap from '../../../../org/bukkit/command/CommandMap.js'
import CommandSender from '../../../../org/bukkit/command/CommandSender.js'
import List from '../../../../java/util/List.js'
import Location from '../../../../org/bukkit/Location.js'
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'

export default interface VersionCommand extends BukkitCommand {
	execute(sender: CommandSender, currentAlias: string, args: Array<string>): boolean;
	getAliases(): Array<string>;
	getDescription(): string;
	getLabel(): string;
	getName(): string;
	getPermission(): string;
	getPermissionMessage(): string;
	getUsage(): string;
	isRegistered(): boolean;
	register(commandMap: CommandMap): boolean;
	setAliases(aliases: Array<any>): Command;
	setDescription(description: string): Command;
	setLabel(_name: string): boolean;
	setName(_name: string): boolean;
	setPermission(permission: string): void;
	setPermissionMessage(permissionMessage: string): Command;
	setUsage(usage: string): Command;
	tabComplete(sender: CommandSender, alias: string, args: Array<string>): Array<string>;
	tabComplete(sender: CommandSender, alias: string, args: Array<string>, location: Location): Array<string>;
	testPermission(target: CommandSender): boolean;
	testPermissionSilent(target: CommandSender): boolean;
	unregister(commandMap: CommandMap): boolean;
}

export default class VersionCommand {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.command.defaults.VersionCommand');
	}
	public static $isInstance(obj: any): obj is VersionCommand {
		return obj instanceof VersionCommand.$javaClass;
	}

	constructor(_name: string);
	constructor(...args: any[]) {
		return new VersionCommand.$javaClass(...args);
	}

	public static broadcastCommandMessage(source: CommandSender, message: string): void;
	public static broadcastCommandMessage(source: CommandSender, message: string, sendToSource: boolean): void;
	public static broadcastCommandMessage(...args: any[]): any {
		return VersionCommand.$javaClass.broadcastCommandMessage(...args);
	}

}

