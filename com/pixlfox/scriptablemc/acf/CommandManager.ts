declare var Java: any;
import BaseCommand from './BaseCommand.js'
import Class from '../../../../java/lang/Class.js'
import Collection from '../../../../java/util/Collection.js'
import CommandCompletionContext from './CommandCompletionContext.js'
import CommandCompletions from './CommandCompletions.js'
import CommandConditions from './CommandConditions.js'
import CommandContexts from './CommandContexts.js'
import CommandExecutionContext from './CommandExecutionContext.js'
import CommandHelp from './CommandHelp.js'
import CommandHelpFormatter from './CommandHelpFormatter.js'
import CommandIssuer from './CommandIssuer.js'
import CommandOperationContext from './CommandOperationContext.js'
import CommandParameter from './CommandParameter.js'
import CommandReplacements from './CommandReplacements.js'
import ConditionContext from './ConditionContext.js'
import ExceptionHandler from './ExceptionHandler.js'
import IssuerLocaleChangedCallback from './IssuerLocaleChangedCallback.js'
import List from '../../../../java/util/List.js'
import Locale from '../../../../java/util/Locale.js'
import Locales from './Locales.js'
import LogLevel from './LogLevel.js'
import Map from '../../../../java/util/Map.js'
import MessageFormatter from './MessageFormatter.js'
import MessageType from './MessageType.js'
import Method from '../../../../java/lang/reflect/Method.js'
import Object from '../../../../java/lang/Object.js'
import RegisteredCommand from './RegisteredCommand.js'
import RootCommand from './RootCommand.js'
import Set from '../../../../java/util/Set.js'
import String from '../../../../java/lang/String.js'
import Throwable from '../../../../java/lang/Throwable.js'

export default interface CommandManager extends Object {
	addSupportedLanguage(locale: Locale): void;
	createCommandContext(command: RegisteredCommand, parameter: CommandParameter, sender: CommandIssuer, args: Array<any>, i: number, passedArgs: Map): CommandExecutionContext;
	createCompletionContext(command: RegisteredCommand, sender: CommandIssuer, input: string, config: string, args: Array<string>): CommandCompletionContext;
	createConditionContext(issuer: CommandIssuer, config: string): ConditionContext;
	createRegisteredCommand(command: BaseCommand, cmdName: string, method: Method, prefSubCommand: string): RegisteredCommand;
	createRootCommand(cmd: string): RootCommand;
	enableUnstableAPI(api: string): void;
	formatMessage(issuer: CommandIssuer, type: MessageType, key: any, replacements: Array<string>): string;
	generateCommandHelp(): CommandHelp;
	generateCommandHelp(command: string): CommandHelp;
	generateCommandHelp(issuer: CommandIssuer, command: string): CommandHelp;
	generateCommandHelp(issuer: CommandIssuer, rootCommand: RootCommand): CommandHelp;
	getCommandCompletions(): CommandCompletions;
	getCommandConditions(): CommandConditions;
	getCommandContexts(): CommandContexts;
	getCommandIssuer(issuer: Object): CommandIssuer;
	getCommandPrefix(issuer: CommandIssuer): string;
	getCommandReplacements(): CommandReplacements;
	getDefaultExceptionHandler(): ExceptionHandler;
	getDefaultFormatter(): MessageFormatter;
	getDefaultHelpPerPage(): number;
	getFormat(type: MessageType): MessageFormatter;
	getHelpFormatter(): CommandHelpFormatter;
	getIssuerLocale(issuer: CommandIssuer): Locale;
	getLocales(): Locales;
	getRegisteredRootCommands(): Array<RootCommand>;
	getRootCommand(cmd: string): RootCommand;
	getSupportedLanguages(): Set;
	hasPermission(issuer: CommandIssuer, permission: string): boolean;
	hasPermission(issuer: CommandIssuer, permissions: Set): boolean;
	hasRegisteredCommands(): boolean;
	isCommandIssuer(type: Class): boolean;
	isLoggingUnhandledExceptions(): boolean;
	log(level: LogLevel, message: string): void;
	log(level: LogLevel, message: string, throwable: Throwable): void;
	notifyLocaleChange(issuer: CommandIssuer, oldLocale: Locale, newLocale: Locale): void;
	obtainRootCommand(cmd: string): RootCommand;
	onLocaleChange(onChange: IssuerLocaleChangedCallback): void;
	registerCommand(command: BaseCommand): void;
	registerDependency(clazz: Class, instance: Object): void;
	registerDependency(clazz: Class, key: string, instance: Object): void;
	sendMessage(issuer: CommandIssuer, type: MessageType, key: any, replacements: Array<string>): void;
	sendMessage(issuerArg: Object, type: MessageType, key: any, replacements: Array<string>): void;
	setDefaultExceptionHandler(exceptionHandler: ExceptionHandler): void;
	setDefaultExceptionHandler(exceptionHandler: ExceptionHandler, logExceptions: boolean): void;
	setDefaultFormatter(defaultFormatter: MessageFormatter): void;
	setDefaultHelpPerPage(defaultHelpPerPage: number): void;
	setFormat(type: MessageType, formatter: MessageFormatter): MessageFormatter;
	setFormat(type: MessageType, colors: Array<Object>): void;
	setFormat(type: MessageType, i: number, color: Object): void;
	setHelpFormatter(helpFormatter: CommandHelpFormatter): void;
	setIssuerLocale(issuer: Object, locale: Locale): Locale;
	usePerIssuerLocale(setting: boolean): boolean;
	usingPerIssuerLocale(): boolean;
}

export default class CommandManager {
	public static get $javaClass(): any {
		return Java.type('com.pixlfox.scriptablemc.acf.CommandManager');
	}
	public static $isInstance(obj: any): obj is CommandManager {
		return obj instanceof CommandManager.$javaClass;
	}

	constructor();
	constructor(...args: any[]) {
		return new CommandManager.$javaClass(...args);
	}

	public static getCurrentCommandIssuer(): CommandIssuer;
	public static getCurrentCommandIssuer(...args: any[]): any {
		return CommandManager.$javaClass.getCurrentCommandIssuer(...args);
	}

	public static getCurrentCommandManager(): CommandManager;
	public static getCurrentCommandManager(...args: any[]): any {
		return CommandManager.$javaClass.getCurrentCommandManager(...args);
	}

	public static getCurrentCommandOperationContext(): CommandOperationContext;
	public static getCurrentCommandOperationContext(...args: any[]): any {
		return CommandManager.$javaClass.getCurrentCommandOperationContext(...args);
	}

}

