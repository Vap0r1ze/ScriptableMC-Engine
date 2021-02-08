declare var Java: any;
import File from '../../../../../java/io/File.js'
import FileFilter from '../../../../../java/io/FileFilter.js'
import FilenameFilter from '../../../../../java/io/FilenameFilter.js'
import String from '../../../../../java/lang/String.js'

export default interface IOFileFilter extends FileFilter, FilenameFilter {
	accept(arg0: File): boolean;
	accept(arg0: File, arg1: string): boolean;
}

export default class IOFileFilter {
	public static get $javaClass(): any {
		return Java.type('org.apache.commons.io.filefilter.IOFileFilter');
	}
	public static $isInstance(obj: any): obj is IOFileFilter {
		return obj instanceof IOFileFilter.$javaClass;
	}

}

