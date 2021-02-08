declare var Java: any;
import Class from '../../java/lang/Class.js'
import Consumer from '../../java/util/function/Consumer.js'
import Exception from '../../java/lang/Exception.js'
import Iterable from '../../java/lang/Iterable.js'
import Iterator from '../../java/util/Iterator.js'
import Object from '../../java/lang/Object.js'
import PrintStream from '../../java/io/PrintStream.js'
import PrintWriter from '../../java/io/PrintWriter.js'
import Spliterator from '../../java/util/Spliterator.js'
import StackTraceElement from '../../java/lang/StackTraceElement.js'
import String from '../../java/lang/String.js'
import Throwable from '../../java/lang/Throwable.js'

export default interface SQLException extends Exception, Iterable {
	addSuppressed(arg0: Throwable): void;
	fillInStackTrace(): Throwable;
	forEach(arg0: Consumer): void;
	getCause(): Throwable;
	getErrorCode(): number;
	getLocalizedMessage(): string;
	getMessage(): string;
	getNextException(): SQLException;
	getSQLState(): string;
	getStackTrace(): Array<StackTraceElement>;
	getSuppressed(): Array<Throwable>;
	initCause(arg0: Throwable): Throwable;
	iterator(): Iterator;
	printStackTrace(): void;
	printStackTrace(arg0: PrintStream): void;
	printStackTrace(arg0: PrintWriter): void;
	setNextException(arg0: SQLException): void;
	setStackTrace(arg0: Array<StackTraceElement>): void;
	spliterator(): Spliterator;
}

export default class SQLException {
	public static get $javaClass(): any {
		return Java.type('java.sql.SQLException');
	}
	public static $isInstance(obj: any): obj is SQLException {
		return obj instanceof SQLException.$javaClass;
	}

	constructor();
	constructor(arg0: string);
	constructor(arg0: Throwable);
	constructor(arg0: string, arg1: string);
	constructor(arg0: string, arg1: Throwable);
	constructor(arg0: string, arg1: string, arg2: Throwable);
	constructor(arg0: string, arg1: string, arg2: number);
	constructor(arg0: string, arg1: string, arg2: number, arg3: Throwable);
	constructor(...args: any[]) {
		return new SQLException.$javaClass(...args);
	}

}

