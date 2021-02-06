declare var Java: any;

export default class Serializable {
	public static get $javaClass(): any {
		return Java.type('java.io.Serializable');
	}
	public static $isInstance(obj: any): obj is Serializable {
		return obj instanceof Serializable.$javaClass;
	}

}

