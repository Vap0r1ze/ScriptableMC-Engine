declare var Java: any;
import Colorable from './Colorable.js'
import DyeColor from '../../../org/bukkit/DyeColor.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from './MaterialData.js'

export default interface Dye extends MaterialData, Colorable {
	clone(): any;
	clone(): MaterialData;
	clone(): Dye;
	getColor(): DyeColor;
	getData(): number;
	getItemType(): Material;
	setColor(color: DyeColor): void;
	setData(data: number): void;
	toItemStack(): ItemStack;
	toItemStack(amount: number): ItemStack;
}

export default class Dye {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.Dye');
	}
	public static $isInstance(obj: any): obj is Dye {
		return obj instanceof Dye.$javaClass;
	}

	constructor();
	constructor(color: DyeColor);
	constructor(type: Material);
	constructor(type: Material, data: number);
	constructor(...args: any[]) {
		return new Dye.$javaClass(...args);
	}

}

