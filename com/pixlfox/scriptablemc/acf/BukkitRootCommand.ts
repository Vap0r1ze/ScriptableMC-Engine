declare var Java: any;
import BaseCommand from './BaseCommand.js'
import Class from '../../../../java/lang/Class.js'
import Command from '../../../../org/bukkit/command/Command.js'
import CommandIssuer from './CommandIssuer.js'
import CommandManager from './CommandManager.js'
import CommandMap from '../../../../org/bukkit/command/CommandMap.js'
import CommandSender from '../../../../org/bukkit/command/CommandSender.js'
import List from '../../../../java/util/List.js'
import Location from '../../../../org/bukkit/Location.js'
import Object from '../../../../java/lang/Object.js'
import Plugin from '../../../../org/bukkit/plugin/Plugin.js'
import PluginIdentifiableCommand from '../../../../org/bukkit/command/PluginIdentifiableCommand.js'
import RegisteredCommand from './RegisteredCommand.js'
import RootCommand from './RootCommand.js'
import SetMultimap from '../../../../com/google/common/collect/SetMultimap.js'
import String from '../../../../java/lang/String.js'

export default interface BukkitRootCommand extends Command, RootCommand, PluginIdentifiableCommand {
	addChild(command: BaseCommand): void;
	addChildShared(children: Array<any>, subCommands: SetMultimap, command: BaseCommand): void;
	execute(sender: CommandSender, commandLabel: string, args: Array<string>): boolean;
	execute(sender: CommandIssuer, commandLabel: string, args: Array<string>): BaseCommand;
	getAliases(): Array<string>;
	getChildren(): Array<BaseCommand>;
	getCommandName(): string;
	getDefCommand(): BaseCommand;
	getDefaultRegisteredCommand(): RegisteredCommand;
	getDescription(): string;
	getLabel(): string;
	getManager(): CommandManager;
	getName(): string;
	getPermission(): string;
	getPermissionMessage(): string;
	getPlugin(): Plugin;
	getSubCommands(): SetMultimap;
	getTabCompletions(sender: CommandIssuer, alias: string, args: Array<string>): Array<string>;
	getTabCompletions(sender: CommandIssuer, alias: string, args: Array<string>, commandsOnly: boolean): Array<string>;
	getTabCompletions(sender: CommandIssuer, alias: string, args: Array<string>, commandsOnly: boolean, isAsync: boolean): Array<string>;
	getUniquePermission(): string;
	getUsage(): string;
	hasAnyPermission(issuer: CommandIssuer): boolean;
	isRegistered(): boolean;
	register(commandMap: CommandMap): boolean;
	setAliases(aliases: Array<any>): Command;
	setDescription(description: string): Command;
	setLabel(_name: string): boolean;
	setName(_name: string): boolean;
	setPermission(permission: string): void;
	setPermissionMessage(permissionMessage: string): Command;
	setUsage(usage: string): Command;
	tabComplete(sender: CommandSender, commandLabel: string, args: Array<string>): Array<string>;
	tabComplete(sender: CommandSender, alias: string, args: Array<string>, location: Location): Array<string>;
	testPermission(target: CommandSender): boolean;
	testPermissionSilent(target: CommandSender): boolean;
	unregister(commandMap: CommandMap): boolean;
}

export default class BukkitRootCommand {
	public static get $javaClass(): any {
		return Java.type('com.pixlfox.scriptablemc.acf.BukkitRootCommand');
	}
	public static $isInstance(obj: any): obj is BukkitRootCommand {
		return obj instanceof BukkitRootCommand.$javaClass;
	}

	public static broadcastCommandMessage(source: CommandSender, message: string): void;
	public static broadcastCommandMessage(source: CommandSender, message: string, sendToSource: boolean): void;
	public static broadcastCommandMessage(...args: any[]): any {
		return BukkitRootCommand.$javaClass.broadcastCommandMessage(...args);
	}

}

