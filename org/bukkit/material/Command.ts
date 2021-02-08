declare var Java: any;
import Class from '../../../java/lang/Class.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from './MaterialData.js'
import Object from '../../../java/lang/Object.js'
import Redstone from './Redstone.js'
import String from '../../../java/lang/String.js'

export default interface Command extends MaterialData, Redstone {
	clone(): Object;
	clone(): MaterialData;
	clone(): Command;
	getData(): number;
	getItemType(): Material;
	isPowered(): boolean;
	setData(data: number): void;
	setPowered(bool: boolean): void;
	toItemStack(): ItemStack;
	toItemStack(amount: number): ItemStack;
}

export default class Command {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.Command');
	}
	public static $isInstance(obj: any): obj is Command {
		return obj instanceof Command.$javaClass;
	}

	constructor();
	constructor(type: Material);
	constructor(type: Material, data: number);
	constructor(...args: any[]) {
		return new Command.$javaClass(...args);
	}

}

