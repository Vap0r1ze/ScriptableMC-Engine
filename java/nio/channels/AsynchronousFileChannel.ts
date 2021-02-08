declare var Java: any;
import AsynchronousChannel from './AsynchronousChannel.js'
import ByteBuffer from '../../../java/nio/ByteBuffer.js'
import Class from '../../../java/lang/Class.js'
import CompletionHandler from './CompletionHandler.js'
import ExecutorService from '../../../java/util/concurrent/ExecutorService.js'
import FileAttribute from '../../../java/nio/file/attribute/FileAttribute.js'
import FileLock from './FileLock.js'
import Future from '../../../java/util/concurrent/Future.js'
import Object from '../../../java/lang/Object.js'
import OpenOption from '../../../java/nio/file/OpenOption.js'
import Path from '../../../java/nio/file/Path.js'
import Set from '../../../java/util/Set.js'
import String from '../../../java/lang/String.js'

export default interface AsynchronousFileChannel extends Object, AsynchronousChannel {
	close(): void;
	force(arg0: boolean): void;
	isOpen(): boolean;
	lock(): Future;
	lock(arg0: Object, arg1: CompletionHandler): void;
	lock(arg0: number, arg1: number, arg2: boolean): Future;
	lock(arg0: number, arg1: number, arg2: boolean, arg3: Object, arg4: CompletionHandler): void;
	read(arg0: ByteBuffer, arg1: number): Future;
	read(arg0: ByteBuffer, arg1: number, arg2: Object, arg3: CompletionHandler): void;
	size(): number;
	truncate(arg0: number): AsynchronousFileChannel;
	tryLock(): FileLock;
	tryLock(arg0: number, arg1: number, arg2: boolean): FileLock;
	write(arg0: ByteBuffer, arg1: number): Future;
	write(arg0: ByteBuffer, arg1: number, arg2: Object, arg3: CompletionHandler): void;
}

export default class AsynchronousFileChannel {
	public static get $javaClass(): any {
		return Java.type('java.nio.channels.AsynchronousFileChannel');
	}
	public static $isInstance(obj: any): obj is AsynchronousFileChannel {
		return obj instanceof AsynchronousFileChannel.$javaClass;
	}

	public static open(arg0: Path, arg1: Array<OpenOption>): AsynchronousFileChannel;
	public static open(arg0: Path, arg1: Set, arg2: ExecutorService, arg3: Array<FileAttribute>): AsynchronousFileChannel;
	public static open(...args: any[]): any {
		return AsynchronousFileChannel.$javaClass.open(...args);
	}

}

