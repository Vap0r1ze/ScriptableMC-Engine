declare var Java: any;
import AttributeView from './AttributeView.js'
import String from '../../../../java/lang/String.js'

export default interface FileAttributeView extends AttributeView {
	name(): string;
}

export default class FileAttributeView {
	public static get $javaClass(): any {
		return Java.type('java.nio.file.attribute.FileAttributeView');
	}
	public static $isInstance(obj: any): obj is FileAttributeView {
		return obj instanceof FileAttributeView.$javaClass;
	}

}

