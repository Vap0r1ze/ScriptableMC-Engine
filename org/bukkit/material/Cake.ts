declare var Java: any;
import Class from '../../../java/lang/Class.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from './MaterialData.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'

export default interface Cake extends MaterialData {
	clone(): Object;
	clone(): MaterialData;
	clone(): Cake;
	getData(): number;
	getItemType(): Material;
	getSlicesEaten(): number;
	getSlicesRemaining(): number;
	setData(data: number): void;
	setSlicesEaten(n: number): void;
	setSlicesRemaining(n: number): void;
	toItemStack(): ItemStack;
	toItemStack(amount: number): ItemStack;
}

export default class Cake {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.Cake');
	}
	public static $isInstance(obj: any): obj is Cake {
		return obj instanceof Cake.$javaClass;
	}

	constructor();
	constructor(type: Material);
	constructor(type: Material, data: number);
	constructor(...args: any[]) {
		return new Cake.$javaClass(...args);
	}

}

