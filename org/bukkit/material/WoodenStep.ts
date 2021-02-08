declare var Java: any;
import Class from '../../../java/lang/Class.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from './MaterialData.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'
import TreeSpecies from '../../../org/bukkit/TreeSpecies.js'
import Wood from './Wood.js'

export default interface WoodenStep extends Wood {
	clone(): MaterialData;
	clone(): Object;
	clone(): Wood;
	clone(): WoodenStep;
	getData(): number;
	getItemType(): Material;
	getSpecies(): TreeSpecies;
	isInverted(): boolean;
	setData(data: number): void;
	setInverted(inv: boolean): void;
	setSpecies(species: TreeSpecies): void;
	toItemStack(): ItemStack;
	toItemStack(amount: number): ItemStack;
}

export default class WoodenStep {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.WoodenStep');
	}
	public static $isInstance(obj: any): obj is WoodenStep {
		return obj instanceof WoodenStep.$javaClass;
	}

	constructor();
	constructor(species: TreeSpecies);
	constructor(species: TreeSpecies, inv: boolean);
	constructor(type: Material, data: number);
	constructor(...args: any[]) {
		return new WoodenStep.$javaClass(...args);
	}

}

