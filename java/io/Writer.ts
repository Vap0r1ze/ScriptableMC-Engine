declare var Java: any;
import Appendable from '../../java/lang/Appendable.js'
import CharSequence from '../../java/lang/CharSequence.js'
import Class from '../../java/lang/Class.js'
import Closeable from './Closeable.js'
import Flushable from './Flushable.js'
import Object from '../../java/lang/Object.js'
import String from '../../java/lang/String.js'

export default interface Writer extends Object, Appendable, Closeable, Flushable {
	append(arg0: string): Writer;
	append(arg0: CharSequence): Writer;
	append(arg0: string): Appendable;
	append(arg0: CharSequence): Appendable;
	append(arg0: CharSequence, arg1: number, arg2: number): Writer;
	append(arg0: CharSequence, arg1: number, arg2: number): Appendable;
	close(): void;
	flush(): void;
	write(arg0: Array<string>): void;
	write(arg0: number): void;
	write(arg0: string): void;
	write(arg0: Array<string>, arg1: number, arg2: number): void;
	write(arg0: string, arg1: number, arg2: number): void;
}

export default class Writer {
	public static get $javaClass(): any {
		return Java.type('java.io.Writer');
	}
	public static $isInstance(obj: any): obj is Writer {
		return obj instanceof Writer.$javaClass;
	}

}

