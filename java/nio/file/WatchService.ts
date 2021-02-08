declare var Java: any;
import Closeable from '../../../java/io/Closeable.js'
import TimeUnit from '../../../java/util/concurrent/TimeUnit.js'
import WatchKey from './WatchKey.js'

export default interface WatchService extends Closeable {
	close(): void;
	poll(): WatchKey;
	poll(arg0: number, arg1: TimeUnit): WatchKey;
	take(): WatchKey;
}

export default class WatchService {
	public static get $javaClass(): any {
		return Java.type('java.nio.file.WatchService');
	}
	public static $isInstance(obj: any): obj is WatchService {
		return obj instanceof WatchService.$javaClass;
	}

}

