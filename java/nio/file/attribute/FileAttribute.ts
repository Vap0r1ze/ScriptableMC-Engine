declare var Java: any;
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'

export default interface FileAttribute {
	name(): string;
	value(): Object;
}

export default class FileAttribute {
	public static get $javaClass(): any {
		return Java.type('java.nio.file.attribute.FileAttribute');
	}
	public static $isInstance(obj: any): obj is FileAttribute {
		return obj instanceof FileAttribute.$javaClass;
	}

}

