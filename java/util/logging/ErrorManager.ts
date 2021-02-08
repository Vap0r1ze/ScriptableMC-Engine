declare var Java: any;
import Class from '../../../java/lang/Class.js'
import Exception from '../../../java/lang/Exception.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'

export default interface ErrorManager extends Object {
	error(arg0: string, arg1: Exception, arg2: number): void;
}

export default class ErrorManager {
	public static get $javaClass(): any {
		return Java.type('java.util.logging.ErrorManager');
	}
	public static $isInstance(obj: any): obj is ErrorManager {
		return obj instanceof ErrorManager.$javaClass;
	}

	constructor();
	constructor(...args: any[]) {
		return new ErrorManager.$javaClass(...args);
	}

	public static get CLOSE_FAILURE(): number {
		return ErrorManager.$javaClass.CLOSE_FAILURE;
	}

	public static get FLUSH_FAILURE(): number {
		return ErrorManager.$javaClass.FLUSH_FAILURE;
	}

	public static get FORMAT_FAILURE(): number {
		return ErrorManager.$javaClass.FORMAT_FAILURE;
	}

	public static get GENERIC_FAILURE(): number {
		return ErrorManager.$javaClass.GENERIC_FAILURE;
	}

	public static get OPEN_FAILURE(): number {
		return ErrorManager.$javaClass.OPEN_FAILURE;
	}

	public static get WRITE_FAILURE(): number {
		return ErrorManager.$javaClass.WRITE_FAILURE;
	}

}

