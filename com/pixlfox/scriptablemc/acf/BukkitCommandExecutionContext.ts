declare var Java: any;
import CommandExecutionContext from './CommandExecutionContext.js'
import CommandIssuer from './CommandIssuer.js'
import CommandSender from '../../../../org/bukkit/command/CommandSender.js'
import Player from '../../../../org/bukkit/entity/Player.js'
import RegisteredCommand from './RegisteredCommand.js'

export default interface BukkitCommandExecutionContext extends CommandExecutionContext {
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
	getFlagValue(flag: string, def: any): any;
	getFlagValue(flag: string, def: number): number;
	getFlagValue(flag: string, def: any): number;
	getFlagValue(flag: string, def: string): string;
	getFlagValue(flag: string, def: number): number;
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
	getPlayer(): Player;
	getResolvedArg(classes: Array<any>): any;
	getResolvedArg(arg: string): any;
	getResolvedArg(key: string, classes: Array<any>): any;
	getSender(): CommandSender;
	hasAnnotation(cls: any): boolean;
	hasFlag(flag: string): boolean;
	isLastArg(): boolean;
	isOptional(): boolean;
	joinArgs(): string;
	joinArgs(sep: string): string;
	popFirstArg(): string;
	popLastArg(): string;
}

export default class BukkitCommandExecutionContext {
	public static get $javaClass(): any {
		return Java.type('com.pixlfox.scriptablemc.acf.BukkitCommandExecutionContext');
	}
	public static $isInstance(obj: any): obj is BukkitCommandExecutionContext {
		return obj instanceof BukkitCommandExecutionContext.$javaClass;
	}

}

