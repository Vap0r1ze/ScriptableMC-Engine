declare var Java: any;
import Class from '../../../java/lang/Class.js'
import String from '../../../java/lang/String.js'

export default interface Member {
	getDeclaringClass(): Class;
	getModifiers(): number;
	getName(): string;
	isSynthetic(): boolean;
}

export default class Member {
	public static get $javaClass(): any {
		return Java.type('java.lang.reflect.Member');
	}
	public static $isInstance(obj: any): obj is Member {
		return obj instanceof Member.$javaClass;
	}

	public static get DECLARED(): number {
		return Member.$javaClass.DECLARED;
	}

	public static get PUBLIC(): number {
		return Member.$javaClass.PUBLIC;
	}

}

