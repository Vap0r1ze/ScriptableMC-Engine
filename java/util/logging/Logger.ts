declare var Java: any;
import Class from '../../../java/lang/Class.js'
import Filter from './Filter.js'
import Handler from './Handler.js'
import Level from './Level.js'
import LogRecord from './LogRecord.js'
import Object from '../../../java/lang/Object.js'
import ResourceBundle from '../../../java/util/ResourceBundle.js'
import String from '../../../java/lang/String.js'
import Supplier from '../../../java/util/function/Supplier.js'
import Throwable from '../../../java/lang/Throwable.js'

export default interface Logger extends Object {
	addHandler(arg0: Handler): void;
	config(arg0: Supplier): void;
	config(arg0: string): void;
	entering(arg0: string, arg1: string): void;
	entering(arg0: string, arg1: string, arg2: Object): void;
	entering(arg0: string, arg1: string, arg2: Array<Object>): void;
	exiting(arg0: string, arg1: string): void;
	exiting(arg0: string, arg1: string, arg2: Object): void;
	fine(arg0: string): void;
	fine(arg0: Supplier): void;
	finer(arg0: string): void;
	finer(arg0: Supplier): void;
	finest(arg0: Supplier): void;
	finest(arg0: string): void;
	getFilter(): Filter;
	getHandlers(): Array<Handler>;
	getLevel(): Level;
	getName(): string;
	getParent(): Logger;
	getResourceBundle(): ResourceBundle;
	getResourceBundleName(): string;
	getUseParentHandlers(): boolean;
	info(arg0: Supplier): void;
	info(arg0: string): void;
	isLoggable(arg0: Level): boolean;
	log(arg0: LogRecord): void;
	log(arg0: Level, arg1: Supplier): void;
	log(arg0: Level, arg1: string): void;
	log(arg0: Level, arg1: Throwable, arg2: Supplier): void;
	log(arg0: Level, arg1: string, arg2: Object): void;
	log(arg0: Level, arg1: string, arg2: Array<Object>): void;
	log(arg0: Level, arg1: string, arg2: Throwable): void;
	logp(arg0: Level, arg1: string, arg2: string, arg3: string): void;
	logp(arg0: Level, arg1: string, arg2: string, arg3: Supplier): void;
	logp(arg0: Level, arg1: string, arg2: string, arg3: string, arg4: Array<Object>): void;
	logp(arg0: Level, arg1: string, arg2: string, arg3: string, arg4: Object): void;
	logp(arg0: Level, arg1: string, arg2: string, arg3: Throwable, arg4: Supplier): void;
	logp(arg0: Level, arg1: string, arg2: string, arg3: string, arg4: Throwable): void;
	logrb(arg0: Level, arg1: string, arg2: string, arg3: string, arg4: string): void;
	logrb(arg0: Level, arg1: string, arg2: string, arg3: ResourceBundle, arg4: string, arg5: Array<Object>): void;
	logrb(arg0: Level, arg1: string, arg2: string, arg3: ResourceBundle, arg4: string, arg5: Throwable): void;
	logrb(arg0: Level, arg1: string, arg2: string, arg3: string, arg4: string, arg5: Throwable): void;
	logrb(arg0: Level, arg1: string, arg2: string, arg3: string, arg4: string, arg5: Array<Object>): void;
	logrb(arg0: Level, arg1: string, arg2: string, arg3: string, arg4: string, arg5: Object): void;
	removeHandler(arg0: Handler): void;
	setFilter(arg0: Filter): void;
	setLevel(arg0: Level): void;
	setParent(arg0: Logger): void;
	setResourceBundle(arg0: ResourceBundle): void;
	setUseParentHandlers(arg0: boolean): void;
	severe(arg0: string): void;
	severe(arg0: Supplier): void;
	throwing(arg0: string, arg1: string, arg2: Throwable): void;
	warning(arg0: string): void;
	warning(arg0: Supplier): void;
}

export default class Logger {
	public static get $javaClass(): any {
		return Java.type('java.util.logging.Logger');
	}
	public static $isInstance(obj: any): obj is Logger {
		return obj instanceof Logger.$javaClass;
	}

	public static get GLOBAL_LOGGER_NAME(): string {
		return Logger.$javaClass.GLOBAL_LOGGER_NAME;
	}

	public static get global(): Logger {
		return Logger.$javaClass.global;
	}

	public static getAnonymousLogger(): Logger;
	public static getAnonymousLogger(arg0: string): Logger;
	public static getAnonymousLogger(...args: any[]): any {
		return Logger.$javaClass.getAnonymousLogger(...args);
	}

	public static getGlobal(): Logger;
	public static getGlobal(...args: any[]): any {
		return Logger.$javaClass.getGlobal(...args);
	}

	public static getLogger(arg0: string): Logger;
	public static getLogger(arg0: string, arg1: string): Logger;
	public static getLogger(...args: any[]): any {
		return Logger.$javaClass.getLogger(...args);
	}

}
