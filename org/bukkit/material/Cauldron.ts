declare var Java: any;
import Class from '../../../java/lang/Class.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from './MaterialData.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'

export default interface Cauldron extends MaterialData {
	clone(): MaterialData;
	clone(): Cauldron;
	clone(): Object;
	getData(): number;
	getItemType(): Material;
	isEmpty(): boolean;
	isFull(): boolean;
	setData(data: number): void;
	toItemStack(): ItemStack;
	toItemStack(amount: number): ItemStack;
}

export default class Cauldron {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.Cauldron');
	}
	public static $isInstance(obj: any): obj is Cauldron {
		return obj instanceof Cauldron.$javaClass;
	}

	constructor();
	constructor(data: number);
	constructor(type: Material, data: number);
	constructor(...args: any[]) {
		return new Cauldron.$javaClass(...args);
	}

}

