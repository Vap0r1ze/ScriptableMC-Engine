declare var Java: any;
import Object from '../../../java/lang/Object.js'

export default interface Consumer {
	accept(arg0: Object): void;
}

export default class Consumer {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.util.Consumer');
	}
	public static $isInstance(obj: any): obj is Consumer {
		return obj instanceof Consumer.$javaClass;
	}

}

