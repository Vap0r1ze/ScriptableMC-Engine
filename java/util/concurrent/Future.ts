declare var Java: any;
import Object from '../../../java/lang/Object.js'
import TimeUnit from './TimeUnit.js'

export default interface Future {
	cancel(arg0: boolean): boolean;
	get(): Object;
	get(arg0: number, arg1: TimeUnit): Object;
	isCancelled(): boolean;
	isDone(): boolean;
}

export default class Future {
	public static get $javaClass(): any {
		return Java.type('java.util.concurrent.Future');
	}
	public static $isInstance(obj: any): obj is Future {
		return obj instanceof Future.$javaClass;
	}

}

