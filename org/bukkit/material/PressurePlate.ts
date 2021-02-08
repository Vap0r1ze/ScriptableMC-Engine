declare var Java: any;
import Class from '../../../java/lang/Class.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from './MaterialData.js'
import Object from '../../../java/lang/Object.js'
import PressureSensor from './PressureSensor.js'
import String from '../../../java/lang/String.js'

export default interface PressurePlate extends MaterialData, PressureSensor {
	clone(): PressurePlate;
	clone(): MaterialData;
	clone(): Object;
	getData(): number;
	getItemType(): Material;
	isPressed(): boolean;
	setData(data: number): void;
	toItemStack(): ItemStack;
	toItemStack(amount: number): ItemStack;
}

export default class PressurePlate {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.PressurePlate');
	}
	public static $isInstance(obj: any): obj is PressurePlate {
		return obj instanceof PressurePlate.$javaClass;
	}

	constructor();
	constructor(type: Material);
	constructor(type: Material, data: number);
	constructor(...args: any[]) {
		return new PressurePlate.$javaClass(...args);
	}

}

