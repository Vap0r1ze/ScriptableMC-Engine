declare var Java: any;

export default interface DirectoryStream$Filter {
	accept(arg0: any): boolean;
}

export default class DirectoryStream$Filter {
	public static get $javaClass(): any {
		return Java.type('java.nio.file.DirectoryStream$Filter');
	}
	public static $isInstance(obj: any): obj is DirectoryStream$Filter {
		return obj instanceof DirectoryStream$Filter.$javaClass;
	}

}

