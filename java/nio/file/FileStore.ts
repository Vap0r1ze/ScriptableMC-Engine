declare var Java: any;
import Class from '../../../java/lang/Class.js'
import FileStoreAttributeView from './attribute/FileStoreAttributeView.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'

export default interface FileStore extends Object {
	getAttribute(arg0: string): Object;
	getFileStoreAttributeView(arg0: Class): FileStoreAttributeView;
	getTotalSpace(): number;
	getUnallocatedSpace(): number;
	getUsableSpace(): number;
	isReadOnly(): boolean;
	name(): string;
	supportsFileAttributeView(arg0: Class): boolean;
	supportsFileAttributeView(arg0: string): boolean;
	type(): string;
}

export default class FileStore {
	public static get $javaClass(): any {
		return Java.type('java.nio.file.FileStore');
	}
	public static $isInstance(obj: any): obj is FileStore {
		return obj instanceof FileStore.$javaClass;
	}

}

