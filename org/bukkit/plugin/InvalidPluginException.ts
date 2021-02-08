declare var Java: any;
import Class from '../../../java/lang/Class.js'
import Exception from '../../../java/lang/Exception.js'
import Object from '../../../java/lang/Object.js'
import PrintStream from '../../../java/io/PrintStream.js'
import PrintWriter from '../../../java/io/PrintWriter.js'
import StackTraceElement from '../../../java/lang/StackTraceElement.js'
import String from '../../../java/lang/String.js'
import Throwable from '../../../java/lang/Throwable.js'

export default interface InvalidPluginException extends Exception {
	addSuppressed(arg0: Throwable): void;
	fillInStackTrace(): Throwable;
	getCause(): Throwable;
	getLocalizedMessage(): string;
	getMessage(): string;
	getStackTrace(): Array<StackTraceElement>;
	getSuppressed(): Array<Throwable>;
	initCause(arg0: Throwable): Throwable;
	printStackTrace(): void;
	printStackTrace(arg0: PrintStream): void;
	printStackTrace(arg0: PrintWriter): void;
	setStackTrace(arg0: Array<StackTraceElement>): void;
}

export default class InvalidPluginException {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.plugin.InvalidPluginException');
	}
	public static $isInstance(obj: any): obj is InvalidPluginException {
		return obj instanceof InvalidPluginException.$javaClass;
	}

	constructor();
	constructor(message: string);
	constructor(cause: Throwable);
	constructor(message: string, cause: Throwable);
	constructor(...args: any[]) {
		return new InvalidPluginException.$javaClass(...args);
	}

}

