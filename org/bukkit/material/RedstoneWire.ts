declare var Java: any;
import Class from '../../../java/lang/Class.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from './MaterialData.js'
import Object from '../../../java/lang/Object.js'
import Redstone from './Redstone.js'
import String from '../../../java/lang/String.js'

export default interface RedstoneWire extends MaterialData, Redstone {
	clone(): RedstoneWire;
	clone(): MaterialData;
	clone(): Object;
	getData(): number;
	getItemType(): Material;
	isPowered(): boolean;
	setData(data: number): void;
	toItemStack(): ItemStack;
	toItemStack(amount: number): ItemStack;
}

export default class RedstoneWire {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.RedstoneWire');
	}
	public static $isInstance(obj: any): obj is RedstoneWire {
		return obj instanceof RedstoneWire.$javaClass;
	}

	constructor();
	constructor(type: Material);
	constructor(type: Material, data: number);
	constructor(...args: any[]) {
		return new RedstoneWire.$javaClass(...args);
	}

}

