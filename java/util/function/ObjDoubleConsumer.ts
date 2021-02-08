declare var Java: any;
import Object from '../../../java/lang/Object.js'

export default interface ObjDoubleConsumer {
	accept(arg0: Object, arg1: number): void;
}

export default class ObjDoubleConsumer {
	public static get $javaClass(): any {
		return Java.type('java.util.function.ObjDoubleConsumer');
	}
	public static $isInstance(obj: any): obj is ObjDoubleConsumer {
		return obj instanceof ObjDoubleConsumer.$javaClass;
	}

}

