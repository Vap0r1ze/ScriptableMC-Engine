declare var Java: any;
import Class from '../../../java/lang/Class.js'
import CoalType from '../../../org/bukkit/CoalType.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from './MaterialData.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'

export default interface Coal extends MaterialData {
	clone(): Object;
	clone(): Coal;
	clone(): MaterialData;
	getData(): number;
	getItemType(): Material;
	getType(): CoalType;
	setData(data: number): void;
	setType(type: CoalType): void;
	toItemStack(): ItemStack;
	toItemStack(amount: number): ItemStack;
}

export default class Coal {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.Coal');
	}
	public static $isInstance(obj: any): obj is Coal {
		return obj instanceof Coal.$javaClass;
	}

	constructor();
	constructor(type: Material);
	constructor(type: CoalType);
	constructor(type: Material, data: number);
	constructor(...args: any[]) {
		return new Coal.$javaClass(...args);
	}

}

