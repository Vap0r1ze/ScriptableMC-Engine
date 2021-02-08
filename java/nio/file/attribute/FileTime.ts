declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import Comparable from '../../../../java/lang/Comparable.js'
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'
import TimeUnit from '../../../../java/util/concurrent/TimeUnit.js'

export default interface FileTime extends Object, Comparable {
	compareTo(arg0: Object): number;
	compareTo(arg0: FileTime): number;
	to(arg0: TimeUnit): number;
	toInstant(): any;
	toMillis(): number;
}

export default class FileTime {
	public static get $javaClass(): any {
		return Java.type('java.nio.file.attribute.FileTime');
	}
	public static $isInstance(obj: any): obj is FileTime {
		return obj instanceof FileTime.$javaClass;
	}

	public static from(arg0: any): FileTime;
	public static from(arg0: number, arg1: TimeUnit): FileTime;
	public static from(...args: any[]): any {
		return FileTime.$javaClass.from(...args);
	}

	public static fromMillis(arg0: number): FileTime;
	public static fromMillis(...args: any[]): any {
		return FileTime.$javaClass.fromMillis(...args);
	}

}

