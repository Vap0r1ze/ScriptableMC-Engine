declare var Java: any;
import Plugin from './Plugin.js'

export default interface PluginLogger {
	addHandler(arg0: any): void;
	config(arg0: any): void;
	config(arg0: string): void;
	entering(arg0: string, arg1: string): void;
	entering(arg0: string, arg1: string, arg2: any): void;
	entering(arg0: string, arg1: string, arg2: Array<any>): void;
	exiting(arg0: string, arg1: string): void;
	exiting(arg0: string, arg1: string, arg2: any): void;
	fine(arg0: string): void;
	fine(arg0: any): void;
	finer(arg0: any): void;
	finer(arg0: string): void;
	finest(arg0: any): void;
	finest(arg0: string): void;
	getFilter(): any;
	getHandlers(): Array<any>;
	getLevel(): any;
	getName(): string;
	getParent(): any;
	getResourceBundle(): any;
	getResourceBundleName(): string;
	getUseParentHandlers(): boolean;
	info(arg0: any): void;
	info(arg0: string): void;
	isLoggable(arg0: any): boolean;
	log(logRecord: any): void;
	log(arg0: any, arg1: any): void;
	log(arg0: any, arg1: string): void;
	log(arg0: any, arg1: any, arg2: any): void;
	log(arg0: any, arg1: string, arg2: any): void;
	log(arg0: any, arg1: string, arg2: Array<any>): void;
	log(arg0: any, arg1: string, arg2: any): void;
	logp(arg0: any, arg1: string, arg2: string, arg3: string): void;
	logp(arg0: any, arg1: string, arg2: string, arg3: any): void;
	logp(arg0: any, arg1: string, arg2: string, arg3: string, arg4: Array<any>): void;
	logp(arg0: any, arg1: string, arg2: string, arg3: string, arg4: any): void;
	logp(arg0: any, arg1: string, arg2: string, arg3: any, arg4: any): void;
	logp(arg0: any, arg1: string, arg2: string, arg3: string, arg4: any): void;
	logrb(arg0: any, arg1: string, arg2: string, arg3: string, arg4: string): void;
	logrb(arg0: any, arg1: string, arg2: string, arg3: any, arg4: string, arg5: Array<any>): void;
	logrb(arg0: any, arg1: string, arg2: string, arg3: any, arg4: string, arg5: any): void;
	logrb(arg0: any, arg1: string, arg2: string, arg3: string, arg4: string, arg5: any): void;
	logrb(arg0: any, arg1: string, arg2: string, arg3: string, arg4: string, arg5: Array<any>): void;
	logrb(arg0: any, arg1: string, arg2: string, arg3: string, arg4: string, arg5: any): void;
	removeHandler(arg0: any): void;
	setFilter(arg0: any): void;
	setLevel(arg0: any): void;
	setParent(arg0: any): void;
	setResourceBundle(arg0: any): void;
	setUseParentHandlers(arg0: boolean): void;
	severe(arg0: string): void;
	severe(arg0: any): void;
	throwing(arg0: string, arg1: string, arg2: any): void;
	warning(arg0: any): void;
	warning(arg0: string): void;
}

export default class PluginLogger {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.plugin.PluginLogger');
	}
	public static $isInstance(obj: any): obj is PluginLogger {
		return obj instanceof PluginLogger.$javaClass;
	}

	constructor(context: Plugin);
	constructor(...args: any[]) {
		return new PluginLogger.$javaClass(...args);
	}

	public static get GLOBAL_LOGGER_NAME(): string {
		return PluginLogger.$javaClass.GLOBAL_LOGGER_NAME;
	}

	public static get global(): any {
		return PluginLogger.$javaClass.global;
	}

	public static getAnonymousLogger(): any;
	public static getAnonymousLogger(arg0: string): any;
	public static getAnonymousLogger(...args: any[]): any {
		return PluginLogger.$javaClass.getAnonymousLogger(...args);
	}

	public static getGlobal(): any;
	public static getGlobal(...args: any[]): any {
		return PluginLogger.$javaClass.getGlobal(...args);
	}

	public static getLogger(arg0: string): any;
	public static getLogger(arg0: string, arg1: string): any;
	public static getLogger(...args: any[]): any {
		return PluginLogger.$javaClass.getLogger(...args);
	}

}

