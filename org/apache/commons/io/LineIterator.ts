declare var Java: any;
import Closeable from '../../../../java/io/Closeable.js'
import Reader from '../../../../java/io/Reader.js'

export default interface LineIterator extends Closeable {
	close(): void;
	forEachRemaining(arg0: any): void;
	hasNext(): boolean;
	next(): any;
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

