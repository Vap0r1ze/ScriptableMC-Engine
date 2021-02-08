declare var Java: any;
import Class from '../../../java/lang/Class.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from './MaterialData.js'
import Object from '../../../java/lang/Object.js'
import SandstoneType from '../../../org/bukkit/SandstoneType.js'
import String from '../../../java/lang/String.js'

export default interface Sandstone extends MaterialData {
	clone(): Object;
	clone(): Sandstone;
	clone(): MaterialData;
	getData(): number;
	getItemType(): Material;
	getType(): SandstoneType;
	setData(data: number): void;
	setType(type: SandstoneType): void;
	toItemStack(): ItemStack;
	toItemStack(amount: number): ItemStack;
}

export default class Sandstone {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.Sandstone');
	}
	public static $isInstance(obj: any): obj is Sandstone {
		return obj instanceof Sandstone.$javaClass;
	}

	constructor();
	constructor(type: Material);
	constructor(type: SandstoneType);
	constructor(type: Material, data: number);
	constructor(...args: any[]) {
		return new Sandstone.$javaClass(...args);
	}

}

