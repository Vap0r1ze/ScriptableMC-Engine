declare var Java: any;
import Object from '../../../java/lang/Object.js'

export default interface Callable {
	call(): Object;
}

export default class Callable {
	public static get $javaClass(): any {
		return Java.type('java.util.concurrent.Callable');
	}
	public static $isInstance(obj: any): obj is Callable {
		return obj instanceof Callable.$javaClass;
	}

}

