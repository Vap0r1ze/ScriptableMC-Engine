declare var Java: any;
import Class from '../../../java/lang/Class.js'
import ErrorManager from './ErrorManager.js'
import Filter from './Filter.js'
import Formatter from './Formatter.js'
import Level from './Level.js'
import LogRecord from './LogRecord.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'

export default interface Handler extends Object {
	close(): void;
	flush(): void;
	getEncoding(): string;
	getErrorManager(): ErrorManager;
	getFilter(): Filter;
	getFormatter(): Formatter;
	getLevel(): Level;
	isLoggable(arg0: LogRecord): boolean;
	publish(arg0: LogRecord): void;
	setEncoding(arg0: string): void;
	setErrorManager(arg0: ErrorManager): void;
	setFilter(arg0: Filter): void;
	setFormatter(arg0: Formatter): void;
	setLevel(arg0: Level): void;
}

export default class Handler {
	public static get $javaClass(): any {
		return Java.type('java.util.logging.Handler');
	}
	public static $isInstance(obj: any): obj is Handler {
		return obj instanceof Handler.$javaClass;
	}

}

