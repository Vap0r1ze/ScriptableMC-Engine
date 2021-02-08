declare var Java: any;
import Class from '../../../java/lang/Class.js'
import Object from '../../../java/lang/Object.js'
import PrintStream from '../../../java/io/PrintStream.js'
import PrintWriter from '../../../java/io/PrintWriter.js'
import RuntimeException from '../../../java/lang/RuntimeException.js'
import StackTraceElement from '../../../java/lang/StackTraceElement.js'
import String from '../../../java/lang/String.js'
import Throwable from '../../../java/lang/Throwable.js'

export default interface UnknownDependencyException extends RuntimeException {
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

export default class UnknownDependencyException {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.plugin.UnknownDependencyException');
	}
	public static $isInstance(obj: any): obj is UnknownDependencyException {
		return obj instanceof UnknownDependencyException.$javaClass;
	}

	constructor();
	constructor(message: string);
	constructor(throwable: Throwable);
	constructor(throwable: Throwable, message: string);
	constructor(...args: any[]) {
		return new UnknownDependencyException.$javaClass(...args);
	}

}

