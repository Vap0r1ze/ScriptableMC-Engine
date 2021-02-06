declare var Java: any;
import PrintStream from '../../java/io/PrintStream.js'
import PrintWriter from '../../java/io/PrintWriter.js'
import SQLException from './SQLException.js'

export default interface SQLWarning extends SQLException {
	addSuppressed(arg0: any): void;
	fillInStackTrace(): any;
	forEach(arg0: any): void;
	getCause(): any;
	getErrorCode(): number;
	getLocalizedMessage(): string;
	getMessage(): string;
	getNextException(): SQLException;
	getNextWarning(): SQLWarning;
	getSQLState(): string;
	getStackTrace(): Array<any>;
	getSuppressed(): Array<any>;
	initCause(arg0: any): any;
	iterator(): any;
	printStackTrace(): void;
	printStackTrace(arg0: PrintStream): void;
	printStackTrace(arg0: PrintWriter): void;
	setNextException(arg0: SQLException): void;
	setNextWarning(arg0: SQLWarning): void;
	setStackTrace(arg0: Array<any>): void;
	spliterator(): any;
}

export default class SQLWarning {
	public static get $javaClass(): any {
		return Java.type('java.sql.SQLWarning');
	}
	public static $isInstance(obj: any): obj is SQLWarning {
		return obj instanceof SQLWarning.$javaClass;
	}

	constructor();
	constructor(arg0: string);
	constructor(arg0: any);
	constructor(arg0: string, arg1: any);
	constructor(arg0: string, arg1: string);
	constructor(arg0: string, arg1: string, arg2: any);
	constructor(arg0: string, arg1: string, arg2: number);
	constructor(arg0: string, arg1: string, arg2: number, arg3: any);
	constructor(...args: any[]) {
		return new SQLWarning.$javaClass(...args);
	}

}

