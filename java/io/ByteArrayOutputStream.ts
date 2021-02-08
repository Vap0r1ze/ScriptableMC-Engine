declare var Java: any;
import Class from '../../java/lang/Class.js'
import Object from '../../java/lang/Object.js'
import OutputStream from './OutputStream.js'
import String from '../../java/lang/String.js'

export default interface ByteArrayOutputStream extends OutputStream {
	close(): void;
	flush(): void;
	reset(): void;
	size(): number;
	toByteArray(): Array<number>;
	write(arg0: number): void;
	write(arg0: Array<number>): void;
	write(arg0: Array<number>, arg1: number, arg2: number): void;
	writeTo(arg0: OutputStream): void;
}

export default class ByteArrayOutputStream {
	public static get $javaClass(): any {
		return Java.type('java.io.ByteArrayOutputStream');
	}
	public static $isInstance(obj: any): obj is ByteArrayOutputStream {
		return obj instanceof ByteArrayOutputStream.$javaClass;
	}

	constructor();
	constructor(arg0: number);
	constructor(...args: any[]) {
		return new ByteArrayOutputStream.$javaClass(...args);
	}

}

