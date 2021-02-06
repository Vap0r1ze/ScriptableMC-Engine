declare var Java: any;
import File from './File.js'

export default interface FilenameFilter {
	accept(arg0: File, arg1: string): boolean;
}

export default class FilenameFilter {
	public static get $javaClass(): any {
		return Java.type('java.io.FilenameFilter');
	}
	public static $isInstance(obj: any): obj is FilenameFilter {
		return obj instanceof FilenameFilter.$javaClass;
	}

}

