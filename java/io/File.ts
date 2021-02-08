declare var Java: any;
import Class from '../../java/lang/Class.js'
import Comparable from '../../java/lang/Comparable.js'
import FileFilter from './FileFilter.js'
import FilenameFilter from './FilenameFilter.js'
import Object from '../../java/lang/Object.js'
import Path from '../../java/nio/file/Path.js'
import Serializable from './Serializable.js'
import String from '../../java/lang/String.js'

export default interface File extends Object, Serializable, Comparable {
	canExecute(): boolean;
	canRead(): boolean;
	canWrite(): boolean;
	compareTo(arg0: Object): number;
	compareTo(arg0: File): number;
	createNewFile(): boolean;
	delete(): boolean;
	deleteOnExit(): void;
	exists(): boolean;
	getAbsoluteFile(): File;
	getAbsolutePath(): string;
	getCanonicalFile(): File;
	getCanonicalPath(): string;
	getFreeSpace(): number;
	getName(): string;
	getParent(): string;
	getParentFile(): File;
	getPath(): string;
	getTotalSpace(): number;
	getUsableSpace(): number;
	isAbsolute(): boolean;
	isDirectory(): boolean;
	isFile(): boolean;
	isHidden(): boolean;
	lastModified(): number;
	length(): number;
	list(): Array<string>;
	list(arg0: FilenameFilter): Array<string>;
	listFiles(): Array<File>;
	listFiles(arg0: FilenameFilter): Array<File>;
	listFiles(arg0: FileFilter): Array<File>;
	mkdir(): boolean;
	mkdirs(): boolean;
	renameTo(arg0: File): boolean;
	setExecutable(arg0: boolean): boolean;
	setExecutable(arg0: boolean, arg1: boolean): boolean;
	setLastModified(arg0: number): boolean;
	setReadOnly(): boolean;
	setReadable(arg0: boolean): boolean;
	setReadable(arg0: boolean, arg1: boolean): boolean;
	setWritable(arg0: boolean): boolean;
	setWritable(arg0: boolean, arg1: boolean): boolean;
	toPath(): Path;
	toURI(): any;
	toURL(): any;
}

export default class File {
	public static get $javaClass(): any {
		return Java.type('java.io.File');
	}
	public static $isInstance(obj: any): obj is File {
		return obj instanceof File.$javaClass;
	}

	constructor(arg0: string);
	constructor(arg0: any);
	constructor(arg0: string, arg1: string);
	constructor(arg0: File, arg1: string);
	constructor(...args: any[]) {
		return new File.$javaClass(...args);
	}

	public static get pathSeparator(): string {
		return File.$javaClass.pathSeparator;
	}

	public static get pathSeparatorChar(): string {
		return File.$javaClass.pathSeparatorChar;
	}

	public static get separator(): string {
		return File.$javaClass.separator;
	}

	public static get separatorChar(): string {
		return File.$javaClass.separatorChar;
	}

	public static createTempFile(arg0: string, arg1: string): File;
	public static createTempFile(arg0: string, arg1: string, arg2: File): File;
	public static createTempFile(...args: any[]): any {
		return File.$javaClass.createTempFile(...args);
	}

	public static listRoots(): Array<File>;
	public static listRoots(...args: any[]): any {
		return File.$javaClass.listRoots(...args);
	}

}

