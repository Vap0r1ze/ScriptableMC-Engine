declare var Java: any;
import Thread from './Thread.js'
import Throwable from './Throwable.js'

export default interface Thread$UncaughtExceptionHandler {
	uncaughtException(arg0: Thread, arg1: Throwable): void;
}

export default class Thread$UncaughtExceptionHandler {
	public static get $javaClass(): any {
		return Java.type('java.lang.Thread$UncaughtExceptionHandler');
	}
	public static $isInstance(obj: any): obj is Thread$UncaughtExceptionHandler {
		return obj instanceof Thread$UncaughtExceptionHandler.$javaClass;
	}

}

