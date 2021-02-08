declare var Java: any;
import Closeable from '../../../java/io/Closeable.js'
import Consumer from '../../../java/util/function/Consumer.js'
import Iterable from '../../../java/lang/Iterable.js'
import Iterator from '../../../java/util/Iterator.js'
import Spliterator from '../../../java/util/Spliterator.js'

export default interface DirectoryStream extends Closeable, Iterable {
	close(): void;
	forEach(arg0: Consumer): void;
	iterator(): Iterator;
	spliterator(): Spliterator;
}

export default class DirectoryStream {
	public static get $javaClass(): any {
		return Java.type('java.nio.file.DirectoryStream');
	}
	public static $isInstance(obj: any): obj is DirectoryStream {
		return obj instanceof DirectoryStream.$javaClass;
	}

}

