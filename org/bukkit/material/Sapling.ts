declare var Java: any;
import Class from '../../../java/lang/Class.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from './MaterialData.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'
import TreeSpecies from '../../../org/bukkit/TreeSpecies.js'
import Wood from './Wood.js'

export default interface Sapling extends Wood {
	clone(): MaterialData;
	clone(): Object;
	clone(): Wood;
	clone(): Sapling;
	getData(): number;
	getItemType(): Material;
	getSpecies(): TreeSpecies;
	isInstantGrowable(): boolean;
	setData(data: number): void;
	setIsInstantGrowable(isInstantGrowable: boolean): void;
	setSpecies(species: TreeSpecies): void;
	toItemStack(): ItemStack;
	toItemStack(amount: number): ItemStack;
}

export default class Sapling {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.Sapling');
	}
	public static $isInstance(obj: any): obj is Sapling {
		return obj instanceof Sapling.$javaClass;
	}

	constructor();
	constructor(species: TreeSpecies);
	constructor(type: Material);
	constructor(type: Material, data: number);
	constructor(species: TreeSpecies, isInstantGrowable: boolean);
	constructor(type: Material, species: TreeSpecies);
	constructor(type: Material, species: TreeSpecies, isInstantGrowable: boolean);
	constructor(...args: any[]) {
		return new Sapling.$javaClass(...args);
	}

}

