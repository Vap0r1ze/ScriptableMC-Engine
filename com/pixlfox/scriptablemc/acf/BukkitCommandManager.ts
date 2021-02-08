declare var Java: any;
import BaseCommand from './BaseCommand.js'
import BukkitCommandCompletionContext from './BukkitCommandCompletionContext.js'
import BukkitCommandExecutionContext from './BukkitCommandExecutionContext.js'
import BukkitCommandIssuer from './BukkitCommandIssuer.js'
import BukkitConditionContext from './BukkitConditionContext.js'
import BukkitLocales from './BukkitLocales.js'
import BukkitRootCommand from './BukkitRootCommand.js'
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
import CommandManager from './CommandManager.js'
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
import Player from '../../../../org/bukkit/entity/Player.js'
import Plugin from '../../../../org/bukkit/plugin/Plugin.js'
import RegisteredCommand from './RegisteredCommand.js'
import RootCommand from './RootCommand.js'
import Set from '../../../../java/util/Set.js'
import String from '../../../../java/lang/String.js'
import Throwable from '../../../../java/lang/Throwable.js'
import TimingManager from './lib/timings/TimingManager.js'

export default interface BukkitCommandManager extends CommandManager {
	addSupportedLanguage(locale: Locale): void;
	createCommandContext(command: RegisteredCommand, parameter: CommandParameter, sender: CommandIssuer, args: Array<any>, i: number, passedArgs: Map): CommandExecutionContext;
	createCommandContext(command: RegisteredCommand, parameter: CommandParameter, sender: CommandIssuer, args: Array<any>, i: number, passedArgs: Map): BukkitCommandExecutionContext;
	createCompletionContext(command: RegisteredCommand, sender: CommandIssuer, input: string, config: string, args: Array<string>): CommandCompletionContext;
	createCompletionContext(command: RegisteredCommand, sender: CommandIssuer, input: string, config: string, args: Array<string>): BukkitCommandCompletionContext;
	createConditionContext(issuer: CommandIssuer, config: string): BukkitConditionContext;
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
	getCommandIssuer(issuer: Object): BukkitCommandIssuer;
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
	getLocales(): BukkitLocales;
	getPlugin(): Plugin;
	getRegisteredRootCommands(): Array<RootCommand>;
	getRootCommand(cmd: string): RootCommand;
	getSupportedLanguages(): Set;
	getTimings(): TimingManager;
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
	registerCommand(command: BaseCommand, force: boolean): void;
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
	setPlayerLocale(player: Player, locale: Locale): Locale;
	unregisterCommand(command: BukkitRootCommand): void;
	unregisterCommand(command: BaseCommand): void;
	unregisterCommands(): void;
	usePerIssuerLocale(setting: boolean): boolean;
	usePerIssuerLocale(usePerIssuerLocale: boolean, autoDetectFromClient: boolean): boolean;
	usingPerIssuerLocale(): boolean;
}

export default class BukkitCommandManager {
	public static get $javaClass(): any {
		return Java.type('com.pixlfox.scriptablemc.acf.BukkitCommandManager');
	}
	public static $isInstance(obj: any): obj is BukkitCommandManager {
		return obj instanceof BukkitCommandManager.$javaClass;
	}

	constructor(plugin: Plugin);
	constructor(...args: any[]) {
		return new BukkitCommandManager.$javaClass(...args);
	}

	public static getCurrentCommandIssuer(): CommandIssuer;
	public static getCurrentCommandIssuer(...args: any[]): any {
		return BukkitCommandManager.$javaClass.getCurrentCommandIssuer(...args);
	}

	public static getCurrentCommandManager(): CommandManager;
	public static getCurrentCommandManager(...args: any[]): any {
		return BukkitCommandManager.$javaClass.getCurrentCommandManager(...args);
	}

	public static getCurrentCommandOperationContext(): CommandOperationContext;
	public static getCurrentCommandOperationContext(...args: any[]): any {
		return BukkitCommandManager.$javaClass.getCurrentCommandOperationContext(...args);
	}

}

