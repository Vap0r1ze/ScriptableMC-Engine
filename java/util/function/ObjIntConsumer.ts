declare var Java: any;
import Object from '../../../java/lang/Object.js'

export default interface ObjIntConsumer {
	accept(arg0: Object, arg1: number): void;
}

export default class ObjIntConsumer {
	public static get $javaClass(): any {
		return Java.type('java.util.function.ObjIntConsumer');
	}
	public static $isInstance(obj: any): obj is ObjIntConsumer {
		return obj instanceof ObjIntConsumer.$javaClass;
	}

}

