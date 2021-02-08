declare var Java: any;

export default class RandomAccess {
	public static get $javaClass(): any {
		return Java.type('java.util.RandomAccess');
	}
	public static $isInstance(obj: any): obj is RandomAccess {
		return obj instanceof RandomAccess.$javaClass;
	}

}

