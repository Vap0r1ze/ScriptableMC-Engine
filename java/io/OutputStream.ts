declare var Java: any;
import Class from '../../java/lang/Class.js'
import Closeable from './Closeable.js'
import Flushable from './Flushable.js'
import Object from '../../java/lang/Object.js'
import String from '../../java/lang/String.js'

export default interface OutputStream extends Object, Closeable, Flushable {
	close(): void;
	flush(): void;
	write(arg0: Array<number>): void;
	write(arg0: number): void;
	write(arg0: Array<number>, arg1: number, arg2: number): void;
}

export default class OutputStream {
	public static get $javaClass(): any {
		return Java.type('java.io.OutputStream');
	}
	public static $isInstance(obj: any): obj is OutputStream {
		return obj instanceof OutputStream.$javaClass;
	}

	constructor();
	constructor(...args: any[]) {
		return new OutputStream.$javaClass(...args);
	}

}

