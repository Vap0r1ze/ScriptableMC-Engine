declare var Java: any;
import CopyOption from './CopyOption.js'
import OpenOption from './OpenOption.js'

export default interface LinkOption extends OpenOption, CopyOption {
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class LinkOption {
	public static get $javaClass(): any {
		return Java.type('java.nio.file.LinkOption');
	}
	public static $isInstance(obj: any): obj is LinkOption {
		return obj instanceof LinkOption.$javaClass;
	}

	public static get NOFOLLOW_LINKS(): LinkOption {
		return this.$javaClass.NOFOLLOW_LINKS;
	}
}

