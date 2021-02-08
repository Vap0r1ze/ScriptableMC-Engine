declare var Java: any;
import Class from '../../../java/lang/Class.js'
import CopyOption from './CopyOption.js'
import Enum from '../../../java/lang/Enum.js'
import Object from '../../../java/lang/Object.js'
import OpenOption from './OpenOption.js'
import String from '../../../java/lang/String.js'

export default interface LinkOption extends Enum, OpenOption, CopyOption {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
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

