declare var Java: any;
import Object from '../../../java/lang/Object.js'

export default interface ObjLongConsumer {
	accept(arg0: Object, arg1: number): void;
}

export default class ObjLongConsumer {
	public static get $javaClass(): any {
		return Java.type('java.util.function.ObjLongConsumer');
	}
	public static $isInstance(obj: any): obj is ObjLongConsumer {
		return obj instanceof ObjLongConsumer.$javaClass;
	}

}

