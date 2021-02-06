declare var Java: any;
import InputStream from './InputStream.js'

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

	constructor(arg0: Array<number>);
	constructor(arg0: Array<number>, arg1: number, arg2: number);
	constructor(...args: any[]) {
		return new ByteArrayInputStream.$javaClass(...args);
	}

}

