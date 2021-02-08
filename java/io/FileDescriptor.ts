declare var Java: any;
import Class from '../../java/lang/Class.js'
import Object from '../../java/lang/Object.js'
import String from '../../java/lang/String.js'

export default interface FileDescriptor extends Object {
	sync(): void;
	valid(): boolean;
}

export default class FileDescriptor {
	public static get $javaClass(): any {
		return Java.type('java.io.FileDescriptor');
	}
	public static $isInstance(obj: any): obj is FileDescriptor {
		return obj instanceof FileDescriptor.$javaClass;
	}

	constructor();
	constructor(...args: any[]) {
		return new FileDescriptor.$javaClass(...args);
	}

	public static get err(): FileDescriptor {
		return FileDescriptor.$javaClass.err;
	}

	public static get _in(): FileDescriptor {
		return FileDescriptor.$javaClass.in;
	}

	public static get out(): FileDescriptor {
		return FileDescriptor.$javaClass.out;
	}

}

