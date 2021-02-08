declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import CommandHelp from './CommandHelp.js'
import CommandIssuer from './CommandIssuer.js'
import CommandManager from './CommandManager.js'
import CommandOperationContext from './CommandOperationContext.js'
import ExceptionHandler from './ExceptionHandler.js'
import List from '../../../../java/util/List.js'
import Object from '../../../../java/lang/Object.js'
import RegisteredCommand from './RegisteredCommand.js'
import Set from '../../../../java/util/Set.js'
import String from '../../../../java/lang/String.js'

export default interface BaseCommand extends Object {
	canExecute(issuer: CommandIssuer, cmd: RegisteredCommand): boolean;
	doHelp(issuer: Object, args: Array<string>): void;
	doHelp(issuer: CommandIssuer, args: Array<string>): void;
	getCommandHelp(): CommandHelp;
	getContextFlags(cls: Class): string;
	getCurrentCommandIssuer(): CommandIssuer;
	getCurrentCommandManager(): CommandManager;
	getDefaultRegisteredCommand(): RegisteredCommand;
	getExceptionHandler(): ExceptionHandler;
	getExecCommandLabel(): string;
	getExecSubcommand(): string;
	getLastCommandOperationContext(): CommandOperationContext;
	getName(): string;
	getOrigArgs(): Array<string>;
	getRegisteredCommands(): Array<RegisteredCommand>;
	getRequiredPermissions(): Set;
	hasPermission(issuer: Object): boolean;
	hasPermission(issuer: CommandIssuer): boolean;
	help(issuer: CommandIssuer, args: Array<string>): void;
	help(issuer: Object, args: Array<string>): void;
	requiresPermission(permission: string): boolean;
	setContextFlags(cls: Class, flags: string): string;
	setExceptionHandler(exceptionHandler: ExceptionHandler): BaseCommand;
	showCommandHelp(): void;
	showSyntax(issuer: CommandIssuer, cmd: RegisteredCommand): void;
	tabComplete(issuer: CommandIssuer, commandLabel: string, args: Array<string>): Array<string>;
	tabComplete(issuer: CommandIssuer, commandLabel: string, args: Array<string>, isAsync: boolean): Array<string>;
}

export default class BaseCommand {
	public static get $javaClass(): any {
		return Java.type('com.pixlfox.scriptablemc.acf.BaseCommand');
	}
	public static $isInstance(obj: any): obj is BaseCommand {
		return obj instanceof BaseCommand.$javaClass;
	}

	constructor();
	constructor(cmd: string);
	constructor(...args: any[]) {
		return new BaseCommand.$javaClass(...args);
	}

}

