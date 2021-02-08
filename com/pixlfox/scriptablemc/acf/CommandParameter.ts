declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import CommandIssuer from './CommandIssuer.js'
import CommandManager from './CommandManager.js'
import ContextResolver from './contexts/ContextResolver.js'
import Map from '../../../../java/util/Map.js'
import Object from '../../../../java/lang/Object.js'
import Parameter from '../../../../java/lang/reflect/Parameter.js'
import RegisteredCommand from './RegisteredCommand.js'
import Set from '../../../../java/util/Set.js'
import String from '../../../../java/lang/String.js'

export default interface CommandParameter extends Object {
	canConsumeInput(): boolean;
	canExecuteWithoutInput(): boolean;
	getConditions(): string;
	getDefaultValue(): string;
	getDescription(): string;
	getDisplayName(issuer: CommandIssuer): string;
	getFlags(): Map;
	getManager(): CommandManager;
	getName(): string;
	getNextParam(): CommandParameter;
	getParamIndex(): number;
	getParameter(): Parameter;
	getRequiredPermissions(): Set;
	getResolver(): ContextResolver;
	getSyntax(): string;
	getSyntax(issuer: CommandIssuer): string;
	getType(): Class;
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
	setFlags(flags: Map): void;
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

	constructor(command: RegisteredCommand, param: Parameter, paramIndex: number, isLast: boolean);
	constructor(...args: any[]) {
		return new CommandParameter.$javaClass(...args);
	}

}

