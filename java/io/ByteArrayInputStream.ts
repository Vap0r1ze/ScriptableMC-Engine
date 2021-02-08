declare var Java: any;
import Class from '../../java/lang/Class.js'
import InputStream from './InputStream.js'
import Object from '../../java/lang/Object.js'
import String from '../../java/lang/String.js'

export default interface ByteArrayInputStream extends InputStream {
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

export default class ByteArrayInputStream {
	public static get $javaClass(): any {
		return Java.type('java.io.ByteArrayInputStream');
	}
	public static $isInstance(obj: any): obj is ByteArrayInputStream {
		return obj instanceof ByteArrayInputStream.$javaClass;
	}

	constructor(arg0: Array<number>);
	constructor(arg0: Array<number>, arg1: number, arg2: number);
	constructor(...args: any[]) {
		return new ByteArrayInputStream.$javaClass(...args);
	}

}

