declare var Java: any;
import File from './File.js'
import OutputStream from './OutputStream.js'
import Writer from './Writer.js'

export default interface PrintWriter extends Writer {
	append(arg0: any): PrintWriter;
	append(arg0: any): any;
	append(arg0: string): any;
	append(arg0: any): Writer;
	append(arg0: string): Writer;
	append(arg0: string): PrintWriter;
	append(arg0: any, arg1: number, arg2: number): PrintWriter;
	append(arg0: any, arg1: number, arg2: number): Writer;
	append(arg0: any, arg1: number, arg2: number): any;
	checkError(): boolean;
	close(): void;
	flush(): void;
	format(arg0: string, arg1: Array<any>): PrintWriter;
	format(arg0: any, arg1: string, arg2: Array<any>): PrintWriter;
	print(arg0: number): void;
	print(arg0: number): void;
	print(arg0: number): void;
	print(arg0: string): void;
	print(arg0: boolean): void;
	print(arg0: any): void;
	print(arg0: string): void;
	print(arg0: Array<string>): void;
	print(arg0: number): void;
	printf(arg0: string, arg1: Array<any>): PrintWriter;
	printf(arg0: any, arg1: string, arg2: Array<any>): PrintWriter;
	println(): void;
	println(arg0: number): void;
	println(arg0: Array<string>): void;
	println(arg0: number): void;
	println(arg0: string): void;
	println(arg0: any): void;
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

