declare var Java: any;
import Class from '../../java/lang/Class.js'
import File from './File.js'
import FileChannel from '../../java/nio/channels/FileChannel.js'
import FileDescriptor from './FileDescriptor.js'
import Object from '../../java/lang/Object.js'
import OutputStream from './OutputStream.js'
import String from '../../java/lang/String.js'

export default interface FileOutputStream extends OutputStream {
	close(): void;
	flush(): void;
	getChannel(): FileChannel;
	getFD(): FileDescriptor;
	write(arg0: Array<number>): void;
	write(arg0: number): void;
	write(arg0: Array<number>, arg1: number, arg2: number): void;
}

export default class FileOutputStream {
	public static get $javaClass(): any {
		return Java.type('java.io.FileOutputStream');
	}
	public static $isInstance(obj: any): obj is FileOutputStream {
		return obj instanceof FileOutputStream.$javaClass;
	}

	constructor(arg0: FileDescriptor);
	constructor(arg0: File);
	constructor(arg0: string);
	constructor(arg0: File, arg1: boolean);
	constructor(arg0: string, arg1: boolean);
	constructor(...args: any[]) {
		return new FileOutputStream.$javaClass(...args);
	}

}

