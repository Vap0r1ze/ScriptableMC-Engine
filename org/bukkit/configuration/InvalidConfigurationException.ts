declare var Java: any;
import PrintStream from '../../../java/io/PrintStream.js'
import PrintWriter from '../../../java/io/PrintWriter.js'

export default interface InvalidConfigurationException {
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

export default class InvalidConfigurationException {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.configuration.InvalidConfigurationException');
	}
	public static $isInstance(obj: any): obj is InvalidConfigurationException {
		return obj instanceof InvalidConfigurationException.$javaClass;
	}

	constructor();
	constructor(cause: any);
	constructor(msg: string);
	constructor(msg: string, cause: any);
	constructor(...args: any[]) {
		return new InvalidConfigurationException.$javaClass(...args);
	}

}

