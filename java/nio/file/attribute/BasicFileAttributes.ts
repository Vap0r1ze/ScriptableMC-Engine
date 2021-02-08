declare var Java: any;
import FileTime from './FileTime.js'
import Object from '../../../../java/lang/Object.js'

export default interface BasicFileAttributes {
	creationTime(): FileTime;
	fileKey(): Object;
	isDirectory(): boolean;
	isOther(): boolean;
	isRegularFile(): boolean;
	isSymbolicLink(): boolean;
	lastAccessTime(): FileTime;
	lastModifiedTime(): FileTime;
	size(): number;
}

export default class BasicFileAttributes {
	public static get $javaClass(): any {
		return Java.type('java.nio.file.attribute.BasicFileAttributes');
	}
	public static $isInstance(obj: any): obj is BasicFileAttributes {
		return obj instanceof BasicFileAttributes.$javaClass;
	}

}

