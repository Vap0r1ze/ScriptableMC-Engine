declare var Java: any;
import CharBuffer from '../../java/nio/CharBuffer.js'
import Closeable from './Closeable.js'

export default interface Reader extends Closeable {
	close(): void;
	mark(arg0: number): void;
	markSupported(): boolean;
	read(): number;
	read(arg0: Array<string>): number;
	read(arg0: CharBuffer): number;
	read(arg0: Array<string>, arg1: number, arg2: number): number;
	ready(): boolean;
	reset(): void;
	skip(arg0: number): number;
}

export default class Reader {
	public static get $javaClass(): any {
		return Java.type('java.io.Reader');
	}
	public static $isInstance(obj: any): obj is Reader {
		return obj instanceof Reader.$javaClass;
	}

}

