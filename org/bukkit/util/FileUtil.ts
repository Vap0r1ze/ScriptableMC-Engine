declare var Java: any;
import File from '../../../java/io/File.js'

export default class FileUtil {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.util.FileUtil');
	}
	public static $isInstance(obj: any): obj is FileUtil {
		return obj instanceof FileUtil.$javaClass;
	}

	constructor();
	constructor(...args: any[]) {
		return new FileUtil.$javaClass(...args);
	}

	public static copy(inFile: File, outFile: File): boolean;
	public static copy(...args: any[]): any {
		return FileUtil.$javaClass.copy(...args);
	}

}

