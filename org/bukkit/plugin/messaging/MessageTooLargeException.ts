declare var Java: any;
import PrintStream from '../../../../java/io/PrintStream.js'
import PrintWriter from '../../../../java/io/PrintWriter.js'

export default interface MessageTooLargeException {
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

export default class MessageTooLargeException {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.plugin.messaging.MessageTooLargeException');
	}
	public static $isInstance(obj: any): obj is MessageTooLargeException {
		return obj instanceof MessageTooLargeException.$javaClass;
	}

	constructor();
	constructor(msg: string);
	constructor(length: number);
	constructor(message: Array<number>);
	constructor(...args: any[]) {
		return new MessageTooLargeException.$javaClass(...args);
	}

}

