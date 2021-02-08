declare var Java: any;
import AttributeView from './AttributeView.js'
import String from '../../../../java/lang/String.js'

export default interface FileStoreAttributeView extends AttributeView {
	name(): string;
}

export default class FileStoreAttributeView {
	public static get $javaClass(): any {
		return Java.type('java.nio.file.attribute.FileStoreAttributeView');
	}
	public static $isInstance(obj: any): obj is FileStoreAttributeView {
		return obj instanceof FileStoreAttributeView.$javaClass;
	}

}

