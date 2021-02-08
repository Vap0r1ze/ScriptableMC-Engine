declare var Java: any;
import Class from '../../../java/lang/Class.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'

export default class FileChannel$MapMode {
	public static get $javaClass(): any {
		return Java.type('java.nio.channels.FileChannel$MapMode');
	}
	public static $isInstance(obj: any): obj is FileChannel$MapMode {
		return obj instanceof FileChannel$MapMode.$javaClass;
	}

	public static get PRIVATE(): FileChannel$MapMode {
		return FileChannel$MapMode.$javaClass.PRIVATE;
	}

	public static get READ_ONLY(): FileChannel$MapMode {
		return FileChannel$MapMode.$javaClass.READ_ONLY;
	}

	public static get READ_WRITE(): FileChannel$MapMode {
		return FileChannel$MapMode.$javaClass.READ_WRITE;
	}

}

