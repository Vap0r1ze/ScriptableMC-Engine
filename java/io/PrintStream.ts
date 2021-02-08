declare var Java: any;
import Appendable from '../../java/lang/Appendable.js'
import CharSequence from '../../java/lang/CharSequence.js'
import Class from '../../java/lang/Class.js'
import Closeable from './Closeable.js'
import File from './File.js'
import FilterOutputStream from './FilterOutputStream.js'
import Locale from '../../java/util/Locale.js'
import Object from '../../java/lang/Object.js'
import OutputStream from './OutputStream.js'
import String from '../../java/lang/String.js'

export default interface PrintStream extends FilterOutputStream, Appendable, Closeable {
	append(arg0: CharSequence): Appendable;
	append(arg0: string): Appendable;
	append(arg0: string): PrintStream;
	append(arg0: CharSequence): PrintStream;
	append(arg0: CharSequence, arg1: number, arg2: number): Appendable;
	append(arg0: CharSequence, arg1: number, arg2: number): PrintStream;
	checkError(): boolean;
	close(): void;
	flush(): void;
	format(arg0: string, arg1: Array<Object>): PrintStream;
	format(arg0: Locale, arg1: string, arg2: Array<Object>): PrintStream;
	print(arg0: boolean): void;
	print(arg0: number): void;
	print(arg0: number): void;
	print(arg0: number): void;
	print(arg0: Object): void;
	print(arg0: string): void;
	print(arg0: Array<string>): void;
	print(arg0: string): void;
	print(arg0: number): void;
	printf(arg0: string, arg1: Array<Object>): PrintStream;
	printf(arg0: Locale, arg1: string, arg2: Array<Object>): PrintStream;
	println(): void;
	println(arg0: number): void;
	println(arg0: number): void;
	println(arg0: number): void;
	println(arg0: Object): void;
	println(arg0: string): void;
	println(arg0: Array<string>): void;
	println(arg0: boolean): void;
	println(arg0: string): void;
	println(arg0: number): void;
	write(arg0: number): void;
	write(arg0: Array<number>): void;
	write(arg0: Array<number>, arg1: number, arg2: number): void;
}

export default class PrintStream {
	public static get $javaClass(): any {
		return Java.type('java.io.PrintStream');
	}
	public static $isInstance(obj: any): obj is PrintStream {
		return obj instanceof PrintStream.$javaClass;
	}

	constructor(arg0: OutputStream);
	constructor(arg0: string);
	constructor(arg0: File);
	constructor(arg0: OutputStream, arg1: boolean);
	constructor(arg0: string, arg1: string);
	constructor(arg0: File, arg1: string);
	constructor(arg0: OutputStream, arg1: boolean, arg2: string);
	constructor(...args: any[]) {
		return new PrintStream.$javaClass(...args);
	}

}

