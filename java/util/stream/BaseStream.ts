declare var Java: any;
import AutoCloseable from '../../../java/lang/AutoCloseable.js'
import Iterator from '../../../java/util/Iterator.js'
import Runnable from '../../../java/lang/Runnable.js'
import Spliterator from '../../../java/util/Spliterator.js'

export default interface BaseStream extends AutoCloseable {
	close(): void;
	isParallel(): boolean;
	iterator(): Iterator;
	onClose(arg0: Runnable): BaseStream;
	parallel(): BaseStream;
	sequential(): BaseStream;
	spliterator(): Spliterator;
	unordered(): BaseStream;
}

export default class BaseStream {
	public static get $javaClass(): any {
		return Java.type('java.util.stream.BaseStream');
	}
	public static $isInstance(obj: any): obj is BaseStream {
		return obj instanceof BaseStream.$javaClass;
	}

}

