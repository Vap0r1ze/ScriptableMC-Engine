declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import Closeable from '../../../../java/io/Closeable.js'
import Consumer from '../../../../java/util/function/Consumer.js'
import Iterator from '../../../../java/util/Iterator.js'
import Object from '../../../../java/lang/Object.js'
import Reader from '../../../../java/io/Reader.js'
import String from '../../../../java/lang/String.js'

export default interface LineIterator extends Object, Iterator, Closeable {
	close(): void;
	forEachRemaining(arg0: Consumer): void;
	hasNext(): boolean;
	next(): Object;
	next(): string;
	nextLine(): string;
	remove(): void;
}

export default class LineIterator {
	public static get $javaClass(): any {
		return Java.type('org.apache.commons.io.LineIterator');
	}
	public static $isInstance(obj: any): obj is LineIterator {
		return obj instanceof LineIterator.$javaClass;
	}

	constructor(reader: Reader);
	constructor(...args: any[]) {
		return new LineIterator.$javaClass(...args);
	}

	public static closeQuietly(iterator: LineIterator): void;
	public static closeQuietly(...args: any[]): any {
		return LineIterator.$javaClass.closeQuietly(...args);
	}

}

