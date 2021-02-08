declare var Java: any;
import Object from '../../../java/lang/Object.js'

export default interface Supplier {
	get(): Object;
}

export default class Supplier {
	public static get $javaClass(): any {
		return Java.type('java.util.function.Supplier');
	}
	public static $isInstance(obj: any): obj is Supplier {
		return obj instanceof Supplier.$javaClass;
	}

}

