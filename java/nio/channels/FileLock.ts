declare var Java: any;
import AutoCloseable from '../../../java/lang/AutoCloseable.js'
import Channel from './Channel.js'
import Class from '../../../java/lang/Class.js'
import FileChannel from './FileChannel.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'

export default interface FileLock extends Object, AutoCloseable {
	acquiredBy(): Channel;
	channel(): FileChannel;
	close(): void;
	isShared(): boolean;
	isValid(): boolean;
	overlaps(arg0: number, arg1: number): boolean;
	position(): number;
	release(): void;
	size(): number;
}

export default class FileLock {
	public static get $javaClass(): any {
		return Java.type('java.nio.channels.FileLock');
	}
	public static $isInstance(obj: any): obj is FileLock {
		return obj instanceof FileLock.$javaClass;
	}

}

