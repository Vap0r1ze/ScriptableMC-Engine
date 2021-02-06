declare var Java: any;
import File from './File.js'

export default interface FileFilter {
	accept(arg0: File): boolean;
}

export default class FileFilter {
	public static get $javaClass(): any {
		return Java.type('java.io.FileFilter');
	}
	public static $isInstance(obj: any): obj is FileFilter {
		return obj instanceof FileFilter.$javaClass;
	}

}

