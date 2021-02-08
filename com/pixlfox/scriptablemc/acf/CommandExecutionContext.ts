declare var Java: any;
import Annotation from '../../../../java/lang/annotation/Annotation.js'
import Boolean from '../../../../java/lang/Boolean.js'
import Class from '../../../../java/lang/Class.js'
import CommandIssuer from './CommandIssuer.js'
import Double from '../../../../java/lang/Double.js'
import Float from '../../../../java/lang/Float.js'
import Integer from '../../../../java/lang/Integer.js'
import List from '../../../../java/util/List.js'
import Long from '../../../../java/lang/Long.js'
import Map from '../../../../java/util/Map.js'
import Number from '../../../../java/lang/Number.js'
import Object from '../../../../java/lang/Object.js'
import Parameter from '../../../../java/lang/reflect/Parameter.js'
import RegisteredCommand from './RegisteredCommand.js'
import Set from '../../../../java/util/Set.js'
import String from '../../../../java/lang/String.js'

export default interface CommandExecutionContext extends Object {
	canOverridePlayerContext(): boolean;
	getAnnotation(cls: Class): Annotation;
	getAnnotationValue(cls: Class): string;
	getAnnotationValue(cls: Class, options: number): string;
	getArgs(): Array<string>;
	getBooleanFlagValue(flag: string): boolean;
	getBooleanFlagValue(flag: string, def: boolean): boolean;
	getCmd(): RegisteredCommand;
	getDoubleFlagValue(flag: string, def: Number): number;
	getFirstArg(): string;
	getFlagValue(flag: string, def: string): string;
	getFlagValue(flag: string, def: Integer): Integer;
	getFlagValue(flag: string, def: Number): number;
	getFlagValue(flag: string, def: number): number;
	getFlagValue(flag: string, def: number): number;
	getFlagValue(flag: string, def: number): number;
	getFlags(): Map;
	getFloatFlagValue(flag: string, def: Number): number;
	getIndex(): number;
	getIntFlagValue(flag: string, def: Number): Integer;
	getIssuer(): CommandIssuer;
	getLastArg(): string;
	getLongFlagValue(flag: string, def: Number): number;
	getNumParams(): number;
	getParam(): Parameter;
	getParameterPermissions(): Set;
	getPassedArgs(): Map;
	getResolvedArg(arg: string): Object;
	getResolvedArg(classes: Array<Class>): Object;
	getResolvedArg(key: string, classes: Array<Class>): Object;
	hasAnnotation(cls: Class): boolean;
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

