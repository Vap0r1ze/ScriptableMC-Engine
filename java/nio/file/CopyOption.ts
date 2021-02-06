declare var Java: any;

export default class CopyOption {
	public static get $javaClass(): any {
		return Java.type('java.nio.file.CopyOption');
	}
	public static $isInstance(obj: any): obj is CopyOption {
		return obj instanceof CopyOption.$javaClass;
	}

}

