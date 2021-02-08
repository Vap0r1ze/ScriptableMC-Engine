declare var Java: any;
import Appendable from '../../java/lang/Appendable.js'
import CharSequence from '../../java/lang/CharSequence.js'
import Class from '../../java/lang/Class.js'
import File from './File.js'
import Locale from '../../java/util/Locale.js'
import Object from '../../java/lang/Object.js'
import OutputStream from './OutputStream.js'
import String from '../../java/lang/String.js'
import Writer from './Writer.js'

export default interface PrintWriter extends Writer {
	append(arg0: CharSequence): PrintWriter;
	append(arg0: CharSequence): Appendable;
	append(arg0: string): Appendable;
	append(arg0: CharSequence): Writer;
	append(arg0: string): Writer;
	append(arg0: string): PrintWriter;
	append(arg0: CharSequence, arg1: number, arg2: number): PrintWriter;
	append(arg0: CharSequence, arg1: number, arg2: number): Writer;
	append(arg0: CharSequence, arg1: number, arg2: number): Appendable;
	checkError(): boolean;
	close(): void;
	flush(): void;
	format(arg0: string, arg1: Array<Object>): PrintWriter;
	format(arg0: Locale, arg1: string, arg2: Array<Object>): PrintWriter;
	print(arg0: number): void;
	print(arg0: number): void;
	print(arg0: number): void;
	print(arg0: string): void;
	print(arg0: boolean): void;
	print(arg0: Object): void;
	print(arg0: string): void;
	print(arg0: Array<string>): void;
	print(arg0: number): void;
	printf(arg0: string, arg1: Array<Object>): PrintWriter;
	printf(arg0: Locale, arg1: string, arg2: Array<Object>): PrintWriter;
	println(): void;
	println(arg0: number): void;
	println(arg0: Array<string>): void;
	println(arg0: number): void;
	println(arg0: string): void;
	println(arg0: Object): void;
	println(arg0: number): void;
	println(arg0: string): void;
	println(arg0: boolean): void;
	println(arg0: number): void;
	write(arg0: Array<string>): void;
	write(arg0: number): void;
	write(arg0: string): void;
	write(arg0: Array<string>, arg1: number, arg2: number): void;
	write(arg0: string, arg1: number, arg2: number): void;
}

export default class PrintWriter {
	public static get $javaClass(): any {
		return Java.type('java.io.PrintWriter');
	}
	public static $isInstance(obj: any): obj is PrintWriter {
		return obj instanceof PrintWriter.$javaClass;
	}

	constructor(arg0: string);
	constructor(arg0: File);
	constructor(arg0: Writer);
	constructor(arg0: OutputStream);
	constructor(arg0: OutputStream, arg1: boolean);
	constructor(arg0: File, arg1: string);
	constructor(arg0: string, arg1: string);
	constructor(arg0: Writer, arg1: boolean);
	constructor(...args: any[]) {
		return new PrintWriter.$javaClass(...args);
	}

}

