declare var Java: any;
import Object from '../../../java/lang/Object.js'

export default interface BiConsumer {
	accept(arg0: Object, arg1: Object): void;
	andThen(arg0: BiConsumer): BiConsumer;
}

export default class BiConsumer {
	public static get $javaClass(): any {
		return Java.type('java.util.function.BiConsumer');
	}
	public static $isInstance(obj: any): obj is BiConsumer {
		return obj instanceof BiConsumer.$javaClass;
	}

}

