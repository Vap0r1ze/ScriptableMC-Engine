declare var Java: any;
import Class from '../../../java/lang/Class.js'
import Colorable from './Colorable.js'
import DyeColor from '../../../org/bukkit/DyeColor.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from './MaterialData.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'

export default interface Wool extends MaterialData, Colorable {
	clone(): Object;
	clone(): MaterialData;
	clone(): Wool;
	getColor(): DyeColor;
	getData(): number;
	getItemType(): Material;
	setColor(color: DyeColor): void;
	setData(data: number): void;
	toItemStack(): ItemStack;
	toItemStack(amount: number): ItemStack;
}

export default class Wool {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.Wool');
	}
	public static $isInstance(obj: any): obj is Wool {
		return obj instanceof Wool.$javaClass;
	}

	constructor();
	constructor(type: Material);
	constructor(color: DyeColor);
	constructor(type: Material, data: number);
	constructor(...args: any[]) {
		return new Wool.$javaClass(...args);
	}

}

