declare var Java: any;

export default interface InventoryListener {
	accept(t: any): void;
	getType(): any;
}

export default class InventoryListener {
	public static get $javaClass(): any {
		return Java.type('fr.minuskube.inv.InventoryListener');
	}
	public static $isInstance(obj: any): obj is InventoryListener {
		return obj instanceof InventoryListener.$javaClass;
	}

	constructor(type: any, consumer: any);
	constructor(...args: any[]) {
		return new InventoryListener.$javaClass(...args);
	}

}

