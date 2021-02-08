declare var Java: any;
import LogRecord from './LogRecord.js'

export default interface Filter {
	isLoggable(arg0: LogRecord): boolean;
}

export default class Filter {
	public static get $javaClass(): any {
		return Java.type('java.util.logging.Filter');
	}
	public static $isInstance(obj: any): obj is Filter {
		return obj instanceof Filter.$javaClass;
	}

}

