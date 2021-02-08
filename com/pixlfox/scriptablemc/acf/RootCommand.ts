declare var Java: any;
import BaseCommand from './BaseCommand.js'
import CommandIssuer from './CommandIssuer.js'
import CommandManager from './CommandManager.js'
import RegisteredCommand from './RegisteredCommand.js'
import SetMultimap from '../../../../com/google/common/collect/SetMultimap.js'

export default interface RootCommand {
	addChild(command: BaseCommand): void;
	addChildShared(children: Array<any>, subCommands: SetMultimap, command: BaseCommand): void;
	execute(sender: CommandIssuer, commandLabel: string, args: Array<string>): BaseCommand;
	getChildren(): Array<BaseCommand>;
	getCommandName(): string;
	getDefCommand(): BaseCommand;
	getDefaultRegisteredCommand(): RegisteredCommand;
	getDescription(): string;
	getManager(): CommandManager;
	getSubCommands(): SetMultimap;
	getTabCompletions(sender: CommandIssuer, alias: string, args: Array<string>): Array<string>;
	getTabCompletions(sender: CommandIssuer, alias: string, args: Array<string>, commandsOnly: boolean): Array<string>;
	getTabCompletions(sender: CommandIssuer, alias: string, args: Array<string>, commandsOnly: boolean, isAsync: boolean): Array<string>;
	getUniquePermission(): string;
	getUsage(): string;
	hasAnyPermission(issuer: CommandIssuer): boolean;
}

export default class RootCommand {
	public static get $javaClass(): any {
		return Java.type('com.pixlfox.scriptablemc.acf.RootCommand');
	}
	public static $isInstance(obj: any): obj is RootCommand {
		return obj instanceof RootCommand.$javaClass;
	}

}

