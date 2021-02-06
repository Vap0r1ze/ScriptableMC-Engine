declare var Java: any;
import PrintStream from '../../../java/io/PrintStream.js'
import PrintWriter from '../../../java/io/PrintWriter.js'

export default interface InvalidPluginException {
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

export default class InvalidPluginException {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.plugin.InvalidPluginException');
	}

	constructor();
	constructor(message: string);
	constructor(cause: any);
	constructor(message: string, cause: any);
	constructor(...args: any[]) {
		return new InvalidPluginException.$javaClass(...args);
	}

}

