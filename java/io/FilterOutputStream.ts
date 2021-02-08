declare var Java: any;
import Class from '../../java/lang/Class.js'
import Object from '../../java/lang/Object.js'
import OutputStream from './OutputStream.js'
import String from '../../java/lang/String.js'

export default interface FilterOutputStream extends OutputStream {
	close(): void;
	flush(): void;
	write(arg0: Array<number>): void;
	write(arg0: number): void;
	write(arg0: Array<number>, arg1: number, arg2: number): void;
}

export default class FilterOutputStream {
	public static get $javaClass(): any {
		return Java.type('java.io.FilterOutputStream');
	}
	public static $isInstance(obj: any): obj is FilterOutputStream {
		return obj instanceof FilterOutputStream.$javaClass;
	}

	constructor(arg0: OutputStream);
	constructor(...args: any[]) {
		return new FilterOutputStream.$javaClass(...args);
	}

}

