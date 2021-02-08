declare var Java: any;
import Class from '../../java/lang/Class.js'
import Closeable from './Closeable.js'
import Object from '../../java/lang/Object.js'
import String from '../../java/lang/String.js'

export default interface InputStream extends Object, Closeable {
	available(): number;
	close(): void;
	mark(arg0: number): void;
	markSupported(): boolean;
	read(): number;
	read(arg0: Array<number>): number;
	read(arg0: Array<number>, arg1: number, arg2: number): number;
	reset(): void;
	skip(arg0: number): number;
}

export default class InputStream {
	public static get $javaClass(): any {
		return Java.type('java.io.InputStream');
	}
	public static $isInstance(obj: any): obj is InputStream {
		return obj instanceof InputStream.$javaClass;
	}

	constructor();
	constructor(...args: any[]) {
		return new InputStream.$javaClass(...args);
	}

}

