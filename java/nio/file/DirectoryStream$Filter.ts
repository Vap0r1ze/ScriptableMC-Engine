declare var Java: any;
import Object from '../../../java/lang/Object.js'

export default interface DirectoryStream$Filter {
	accept(arg0: Object): boolean;
}

export default class DirectoryStream$Filter {
	public static get $javaClass(): any {
		return Java.type('java.nio.file.DirectoryStream$Filter');
	}
	public static $isInstance(obj: any): obj is DirectoryStream$Filter {
		return obj instanceof DirectoryStream$Filter.$javaClass;
	}

}

