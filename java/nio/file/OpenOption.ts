declare var Java: any;

export default class OpenOption {
	public static get $javaClass(): any {
		return Java.type('java.nio.file.OpenOption');
	}
	public static $isInstance(obj: any): obj is OpenOption {
		return obj instanceof OpenOption.$javaClass;
	}

}

