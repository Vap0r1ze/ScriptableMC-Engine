declare var Java: any;
import CommandIssuer from './CommandIssuer.js'
import RegisteredCommand from './RegisteredCommand.js'

export default interface CommandExecutionContext {
	canOverridePlayerContext(): boolean;
	getAnnotation(cls: any): any;
	getAnnotationValue(cls: any): string;
	getAnnotationValue(cls: any, options: number): string;
	getArgs(): Array<string>;
	getBooleanFlagValue(flag: string): boolean;
	getBooleanFlagValue(flag: string, def: boolean): boolean;
	getCmd(): RegisteredCommand;
	getDoubleFlagValue(flag: string, def: any): number;
	getFirstArg(): string;
	getFlagValue(flag: string, def: number): number;
	getFlagValue(flag: string, def: number): number;
	getFlagValue(flag: string, def: any): any;
	getFlagValue(flag: string, def: string): string;
	getFlagValue(flag: string, def: number): number;
	getFlagValue(flag: string, def: any): number;
	getFlags(): any;
	getFloatFlagValue(flag: string, def: any): number;
	getIndex(): number;
	getIntFlagValue(flag: string, def: any): any;
	getIssuer(): CommandIssuer;
	getLastArg(): string;
	getLongFlagValue(flag: string, def: any): number;
	getNumParams(): number;
	getParam(): any;
	getParameterPermissions(): any;
	getPassedArgs(): any;
	getResolvedArg(arg: string): any;
	getResolvedArg(classes: Array<any>): any;
	getResolvedArg(key: string, classes: Array<any>): any;
	hasAnnotation(cls: any): boolean;
	hasFlag(flag: string): boolean;
	isLastArg(): boolean;
	isOptional(): boolean;
	joinArgs(): string;
	joinArgs(sep: string): string;
	popFirstArg(): string;
	popLastArg(): string;
}

export default class CommandExecutionContext {
	public static get $javaClass(): any {
		return Java.type('com.pixlfox.scriptablemc.acf.CommandExecutionContext');
	}
	public static $isInstance(obj: any): obj is CommandExecutionContext {
		return obj instanceof CommandExecutionContext.$javaClass;
	}

}

