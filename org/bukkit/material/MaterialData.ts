declare var Java: any;
import Class from '../../../java/lang/Class.js'
import Cloneable from '../../../java/lang/Cloneable.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'

export default interface MaterialData extends Object, Cloneable {
	clone(): Object;
	clone(): MaterialData;
	getData(): number;
	getItemType(): Material;
	setData(data: number): void;
	toItemStack(): ItemStack;
	toItemStack(amount: number): ItemStack;
}

export default class MaterialData {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.MaterialData');
	}
	public static $isInstance(obj: any): obj is MaterialData {
		return obj instanceof MaterialData.$javaClass;
	}

	constructor(type: Material);
	constructor(type: Material, data: number);
	constructor(...args: any[]) {
		return new MaterialData.$javaClass(...args);
	}

}

