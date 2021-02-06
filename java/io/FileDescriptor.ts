declare var Java: any;

export default interface FileDescriptor {
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

