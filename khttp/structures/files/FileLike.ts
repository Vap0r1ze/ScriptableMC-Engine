declare var Java: any;
import Class from '../../../java/lang/Class.js'
import File from '../../../java/io/File.js'
import Object from '../../../java/lang/Object.js'
import Path from '../../../java/nio/file/Path.js'
import String from '../../../java/lang/String.js'

export default interface FileLike extends Object {
	getContents(): Array<number>;
	getFieldName(): string;
	getFileName(): string;
}

export default class FileLike {
	public static get $javaClass(): any {
		return Java.type('khttp.structures.files.FileLike');
	}
	public static $isInstance(obj: any): obj is FileLike {
		return obj instanceof FileLike.$javaClass;
	}

	constructor(file: File);
	constructor(path: Path);
	constructor(_name: string, path: Path);
	constructor(_name: string, contents: Array<number>);
	constructor(_name: string, contents: string);
	constructor(_name: string, file: File);
	constructor(fieldName: string, fileName: string, contents: Array<number>);
	constructor(...args: any[]) {
		return new FileLike.$javaClass(...args);
	}

}

