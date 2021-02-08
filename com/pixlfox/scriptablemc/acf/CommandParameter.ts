declare var Java: any;
import CommandIssuer from './CommandIssuer.js'
import CommandManager from './CommandManager.js'
import ContextResolver from './contexts/ContextResolver.js'
import RegisteredCommand from './RegisteredCommand.js'

export default interface CommandParameter {
	canConsumeInput(): boolean;
	canExecuteWithoutInput(): boolean;
	getConditions(): string;
	getDefaultValue(): string;
	getDescription(): string;
	getDisplayName(issuer: CommandIssuer): string;
	getFlags(): any;
	getManager(): CommandManager;
	getName(): string;
	getNextParam(): CommandParameter;
	getParamIndex(): number;
	getParameter(): any;
	getRequiredPermissions(): any;
	getResolver(): ContextResolver;
	getSyntax(): string;
	getSyntax(issuer: CommandIssuer): string;
	getType(): any;
	getValues(): Array<string>;
	isCommandIssuer(): boolean;
	isLast(): boolean;
	isOptional(): boolean;
	isOptionalInput(): boolean;
	isOptionalResolver(): boolean;
	requiresInput(): boolean;
	setCanConsumeInput(canConsumeInput: boolean): void;
	setCommandIssuer(commandIssuer: boolean): void;
	setConditions(conditions: string): void;
	setDefaultValue(defaultValue: string): void;
	setDescription(description: string): void;
	setFlags(flags: any): void;
	setNextParam(nextParam: CommandParameter): void;
	setOptional(optional: boolean): void;
	setOptionalResolver(optionalResolver: boolean): void;
	setRequiresInput(requiresInput: boolean): void;
	setResolver(resolver: ContextResolver): void;
	setSyntax(syntax: string): void;
	setValues(values: Array<string>): void;
}

export default class CommandParameter {
	public static get $javaClass(): any {
		return Java.type('com.pixlfox.scriptablemc.acf.CommandParameter');
	}
	public static $isInstance(obj: any): obj is CommandParameter {
		return obj instanceof CommandParameter.$javaClass;
	}

	constructor(command: RegisteredCommand, param: any, paramIndex: number, isLast: boolean);
	constructor(...args: any[]) {
		return new CommandParameter.$javaClass(...args);
	}

}

