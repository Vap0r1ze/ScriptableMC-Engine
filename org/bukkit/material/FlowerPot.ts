declare var Java: any;
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from './MaterialData.js'

export default interface FlowerPot extends MaterialData {
	clone(): any;
	clone(): MaterialData;
	clone(): FlowerPot;
	getContents(): MaterialData;
	getData(): number;
	getItemType(): Material;
	setContents(materialData: MaterialData): void;
	setData(data: number): void;
	toItemStack(): ItemStack;
	toItemStack(amount: number): ItemStack;
}

export default class FlowerPot {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.FlowerPot');
	}
	public static $isInstance(obj: any): obj is FlowerPot {
		return obj instanceof FlowerPot.$javaClass;
	}

	constructor();
	constructor(type: Material);
	constructor(type: Material, data: number);
	constructor(...args: any[]) {
		return new FlowerPot.$javaClass(...args);
	}

}

