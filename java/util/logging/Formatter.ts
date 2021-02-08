declare var Java: any;
import Class from '../../../java/lang/Class.js'
import Handler from './Handler.js'
import LogRecord from './LogRecord.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'

export default interface Formatter extends Object {
	format(arg0: LogRecord): string;
	formatMessage(arg0: LogRecord): string;
	getHead(arg0: Handler): string;
	getTail(arg0: Handler): string;
}

export default class Formatter {
	public static get $javaClass(): any {
		return Java.type('java.util.logging.Formatter');
	}
	public static $isInstance(obj: any): obj is Formatter {
		return obj instanceof Formatter.$javaClass;
	}

}

