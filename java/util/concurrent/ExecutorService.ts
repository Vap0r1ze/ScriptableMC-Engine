declare var Java: any;
import Callable from './Callable.js'
import Collection from '../../../java/util/Collection.js'
import Executor from './Executor.js'
import Future from './Future.js'
import List from '../../../java/util/List.js'
import Object from '../../../java/lang/Object.js'
import Runnable from '../../../java/lang/Runnable.js'
import TimeUnit from './TimeUnit.js'

export default interface ExecutorService extends Executor {
	awaitTermination(arg0: number, arg1: TimeUnit): boolean;
	execute(arg0: Runnable): void;
	invokeAll(arg0: Array<any>): Array<any>;
	invokeAll(arg0: Array<any>, arg1: number, arg2: TimeUnit): Array<any>;
	invokeAny(arg0: Array<any>): Object;
	invokeAny(arg0: Array<any>, arg1: number, arg2: TimeUnit): Object;
	isShutdown(): boolean;
	isTerminated(): boolean;
	shutdown(): void;
	shutdownNow(): Array<Runnable>;
	submit(arg0: Callable): Future;
	submit(arg0: Runnable): Future;
	submit(arg0: Runnable, arg1: Object): Future;
}

export default class ExecutorService {
	public static get $javaClass(): any {
		return Java.type('java.util.concurrent.ExecutorService');
	}
	public static $isInstance(obj: any): obj is ExecutorService {
		return obj instanceof ExecutorService.$javaClass;
	}

}

