declare var Java: any;
import Class from '../../java/lang/Class.js'
import Object from '../../java/lang/Object.js'

export default interface Wrapper {
	isWrapperFor(arg0: Class): boolean;
	unwrap(arg0: Class): Object;
}

export default class Wrapper {
	public static get $javaClass(): any {
		return Java.type('java.sql.Wrapper');
	}
	public static $isInstance(obj: any): obj is Wrapper {
		return obj instanceof Wrapper.$javaClass;
	}

}

