declare var Java: any;
import Class from '../../../java/lang/Class.js'
import Enum from '../../../java/lang/Enum.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'

export default interface AccessMode extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
}

export default class AccessMode {
	public static get $javaClass(): any {
		return Java.type('java.nio.file.AccessMode');
	}
	public static $isInstance(obj: any): obj is AccessMode {
		return obj instanceof AccessMode.$javaClass;
	}

	public static get EXECUTE(): AccessMode {
		return this.$javaClass.EXECUTE;
	}
	public static get READ(): AccessMode {
		return this.$javaClass.READ;
	}
	public static get WRITE(): AccessMode {
		return this.$javaClass.WRITE;
	}
}

