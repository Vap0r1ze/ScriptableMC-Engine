declare var Java: any;
import PrintStream from '../../../java/io/PrintStream.js'
import PrintWriter from '../../../java/io/PrintWriter.js'

export default interface EventException {
	addSuppressed(arg0: any): void;
	fillInStackTrace(): any;
	getCause(): any;
	getLocalizedMessage(): string;
	getMessage(): string;
	getStackTrace(): Array<any>;
	getSuppressed(): Array<any>;
	initCause(arg0: any): any;
	printStackTrace(): void;
	printStackTrace(arg0: PrintStream): void;
	printStackTrace(arg0: PrintWriter): void;
	setStackTrace(arg0: Array<any>): void;
}

export default class EventException {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.EventException');
	}

	constructor();
	constructor(message: string);
	constructor(throwable: any);
	constructor(cause: any, message: string);
	constructor(...args: any[]) {
		return new EventException.$javaClass(...args);
	}

}

