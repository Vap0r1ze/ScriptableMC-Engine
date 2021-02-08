declare var Java: any;
import Class from '../../../java/lang/Class.js'
import Level from './Level.js'
import Object from '../../../java/lang/Object.js'
import ResourceBundle from '../../../java/util/ResourceBundle.js'
import Serializable from '../../../java/io/Serializable.js'
import String from '../../../java/lang/String.js'
import Throwable from '../../../java/lang/Throwable.js'

export default interface LogRecord extends Object, Serializable {
	getLevel(): Level;
	getLoggerName(): string;
	getMessage(): string;
	getMillis(): number;
	getParameters(): Array<Object>;
	getResourceBundle(): ResourceBundle;
	getResourceBundleName(): string;
	getSequenceNumber(): number;
	getSourceClassName(): string;
	getSourceMethodName(): string;
	getThreadID(): number;
	getThrown(): Throwable;
	setLevel(arg0: Level): void;
	setLoggerName(arg0: string): void;
	setMessage(arg0: string): void;
	setMillis(arg0: number): void;
	setParameters(arg0: Array<Object>): void;
	setResourceBundle(arg0: ResourceBundle): void;
	setResourceBundleName(arg0: string): void;
	setSequenceNumber(arg0: number): void;
	setSourceClassName(arg0: string): void;
	setSourceMethodName(arg0: string): void;
	setThreadID(arg0: number): void;
	setThrown(arg0: Throwable): void;
}

export default class LogRecord {
	public static get $javaClass(): any {
		return Java.type('java.util.logging.LogRecord');
	}
	public static $isInstance(obj: any): obj is LogRecord {
		return obj instanceof LogRecord.$javaClass;
	}

	constructor(arg0: Level, arg1: string);
	constructor(...args: any[]) {
		return new LogRecord.$javaClass(...args);
	}

}

