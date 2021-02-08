declare var Java: any;
import Class from './Class.js'
import Exception from './Exception.js'
import Object from './Object.js'
import PrintStream from '../../java/io/PrintStream.js'
import PrintWriter from '../../java/io/PrintWriter.js'
import StackTraceElement from './StackTraceElement.js'
import String from './String.js'
import Throwable from './Throwable.js'

export default interface RuntimeException extends Exception {
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

export default class RuntimeException {
	public static get $javaClass(): any {
		return Java.type('java.lang.RuntimeException');
	}
	public static $isInstance(obj: any): obj is RuntimeException {
		return obj instanceof RuntimeException.$javaClass;
	}

	constructor();
	constructor(arg0: Throwable);
	constructor(arg0: string);
	constructor(arg0: string, arg1: Throwable);
	constructor(...args: any[]) {
		return new RuntimeException.$javaClass(...args);
	}

}

