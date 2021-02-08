declare var Java: any;

export default class Cloneable {
	public static get $javaClass(): any {
		return Java.type('java.lang.Cloneable');
	}
	public static $isInstance(obj: any): obj is Cloneable {
		return obj instanceof Cloneable.$javaClass;
	}

}

