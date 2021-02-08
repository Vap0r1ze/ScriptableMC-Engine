declare var Java: any;
import Object from '../../../java/lang/Object.js'

export default interface Consumer {
	accept(arg0: Object): void;
	andThen(arg0: Consumer): Consumer;
}

export default class Consumer {
	public static get $javaClass(): any {
		return Java.type('java.util.function.Consumer');
	}
	public static $isInstance(obj: any): obj is Consumer {
		return obj instanceof Consumer.$javaClass;
	}

}

