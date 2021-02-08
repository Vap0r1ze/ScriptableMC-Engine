declare var Java: any;
import Object from '../../../java/lang/Object.js'
import Throwable from '../../../java/lang/Throwable.js'

export default interface CompletionHandler {
	completed(arg0: Object, arg1: Object): void;
	failed(arg0: Throwable, arg1: Object): void;
}

export default class CompletionHandler {
	public static get $javaClass(): any {
		return Java.type('java.nio.channels.CompletionHandler');
	}
	public static $isInstance(obj: any): obj is CompletionHandler {
		return obj instanceof CompletionHandler.$javaClass;
	}

}

