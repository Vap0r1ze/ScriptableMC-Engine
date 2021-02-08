declare var Java: any;
import BaseCommand from './BaseCommand.js'
import BukkitCommandCompletionContext from './BukkitCommandCompletionContext.js'
import BukkitCommandExecutionContext from './BukkitCommandExecutionContext.js'
import BukkitCommandIssuer from './BukkitCommandIssuer.js'
import BukkitCommandManager from './BukkitCommandManager.js'
import BukkitConditionContext from './BukkitConditionContext.js'
import BukkitLocales from './BukkitLocales.js'
import BukkitRootCommand from './BukkitRootCommand.js'
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
import Locales from './Locales.js'
import LogLevel from './LogLevel.js'
import MessageFormatter from './MessageFormatter.js'
import MessageType from './MessageType.js'
import Player from '../../../../org/bukkit/entity/Player.js'
import Plugin from '../../../../org/bukkit/plugin/Plugin.js'
import RegisteredCommand from './RegisteredCommand.js'
import RootCommand from './RootCommand.js'
import TimingManager from './lib/timings/TimingManager.js'

export default interface PaperCommandManager extends BukkitCommandManager {
	addSupportedLanguage(locale: any): void;
	createCommandContext(command: RegisteredCommand, parameter: CommandParameter, sender: CommandIssuer, args: Array<any>, i: number, passedArgs: any): CommandExecutionContext;
	createCommandContext(command: RegisteredCommand, parameter: CommandParameter, sender: CommandIssuer, args: Array<any>, i: number, passedArgs: any): BukkitCommandExecutionContext;
	createCompletionContext(command: RegisteredCommand, sender: CommandIssuer, input: string, config: string, args: Array<string>): CommandCompletionContext;
	createCompletionContext(command: RegisteredCommand, sender: CommandIssuer, input: string, config: string, args: Array<string>): BukkitCommandCompletionContext;
	createConditionContext(issuer: CommandIssuer, config: string): BukkitConditionContext;
	createConditionContext(issuer: CommandIssuer, config: string): ConditionContext;
	createRegisteredCommand(command: BaseCommand, cmdName: string, method: any, prefSubCommand: string): RegisteredCommand;
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
	getCommandIssuer(issuer: any): BukkitCommandIssuer;
	getCommandIssuer(issuer: any): CommandIssuer;
	getCommandPrefix(issuer: CommandIssuer): string;
	getCommandReplacements(): CommandReplacements;
	getDefaultExceptionHandler(): ExceptionHandler;
	getDefaultFormatter(): MessageFormatter;
	getDefaultHelpPerPage(): number;
	getFormat(type: MessageType): MessageFormatter;
	getHelpFormatter(): CommandHelpFormatter;
	getIssuerLocale(issuer: CommandIssuer): any;
	getLocales(): Locales;
	getLocales(): BukkitLocales;
	getPlugin(): Plugin;
	getRegisteredRootCommands(): Array<RootCommand>;
	getRootCommand(cmd: string): RootCommand;
	getSupportedLanguages(): any;
	getTimings(): TimingManager;
	hasPermission(issuer: CommandIssuer, permissions: any): boolean;
	hasPermission(issuer: CommandIssuer, permission: string): boolean;
	hasRegisteredCommands(): boolean;
	isCommandIssuer(type: any): boolean;
	isLoggingUnhandledExceptions(): boolean;
	log(level: LogLevel, message: string): void;
	log(level: LogLevel, message: string, throwable: any): void;
	notifyLocaleChange(issuer: CommandIssuer, oldLocale: any, newLocale: any): void;
	obtainRootCommand(cmd: string): RootCommand;
	onLocaleChange(onChange: IssuerLocaleChangedCallback): void;
	registerCommand(command: BaseCommand): void;
	registerCommand(command: BaseCommand, force: boolean): void;
	registerDependency(clazz: any, instance: any): void;
	registerDependency(clazz: any, key: string, instance: any): void;
	sendMessage(issuer: CommandIssuer, type: MessageType, key: any, replacements: Array<string>): void;
	sendMessage(issuerArg: any, type: MessageType, key: any, replacements: Array<string>): void;
	setDefaultExceptionHandler(exceptionHandler: ExceptionHandler): void;
	setDefaultExceptionHandler(exceptionHandler: ExceptionHandler, logExceptions: boolean): void;
	setDefaultFormatter(defaultFormatter: MessageFormatter): void;
	setDefaultHelpPerPage(defaultHelpPerPage: number): void;
	setFormat(type: MessageType, colors: Array<any>): void;
	setFormat(type: MessageType, formatter: MessageFormatter): MessageFormatter;
	setFormat(type: MessageType, i: number, color: any): void;
	setHelpFormatter(helpFormatter: CommandHelpFormatter): void;
	setIssuerLocale(issuer: any, locale: any): any;
	setPlayerLocale(player: Player, locale: any): any;
	unregisterCommand(command: BukkitRootCommand): void;
	unregisterCommand(command: BaseCommand): void;
	unregisterCommands(): void;
	usePerIssuerLocale(setting: boolean): boolean;
	usePerIssuerLocale(usePerIssuerLocale: boolean, autoDetectFromClient: boolean): boolean;
	usingPerIssuerLocale(): boolean;
}

export default class PaperCommandManager {
	public static get $javaClass(): any {
		return Java.type('com.pixlfox.scriptablemc.acf.PaperCommandManager');
	}
	public static $isInstance(obj: any): obj is PaperCommandManager {
		return obj instanceof PaperCommandManager.$javaClass;
	}

	constructor(plugin: Plugin);
	constructor(...args: any[]) {
		return new PaperCommandManager.$javaClass(...args);
	}

	public static getCurrentCommandIssuer(): CommandIssuer;
	public static getCurrentCommandIssuer(...args: any[]): any {
		return PaperCommandManager.$javaClass.getCurrentCommandIssuer(...args);
	}

	public static getCurrentCommandManager(): CommandManager;
	public static getCurrentCommandManager(...args: any[]): any {
		return PaperCommandManager.$javaClass.getCurrentCommandManager(...args);
	}

	public static getCurrentCommandOperationContext(): CommandOperationContext;
	public static getCurrentCommandOperationContext(...args: any[]): any {
		return PaperCommandManager.$javaClass.getCurrentCommandOperationContext(...args);
	}

}

