declare var Java: any;
import Class from '../../../java/lang/Class.js'
import Consumer from '../../../java/util/function/Consumer.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'

export default interface InventoryListener extends Object {
	accept(t: Object): void;
	getType(): Class;
}

export default class InventoryListener {
	public static get $javaClass(): any {
		return Java.type('fr.minuskube.inv.InventoryListener');
	}
	public static $isInstance(obj: any): obj is InventoryListener {
		return obj instanceof InventoryListener.$javaClass;
	}

	constructor(type: Class, consumer: Consumer);
	constructor(...args: any[]) {
		return new InventoryListener.$javaClass(...args);
	}

}

