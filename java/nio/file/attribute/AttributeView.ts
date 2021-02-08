declare var Java: any;

export default interface AttributeView {
	name(): string;
}

export default class AttributeView {
	public static get $javaClass(): any {
		return Java.type('java.nio.file.attribute.AttributeView');
	}
	public static $isInstance(obj: any): obj is AttributeView {
		return obj instanceof AttributeView.$javaClass;
	}

}

