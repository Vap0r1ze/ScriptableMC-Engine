declare var Java: any;
import Class from '../../../java/lang/Class.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from './MaterialData.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'
import TreeSpecies from '../../../org/bukkit/TreeSpecies.js'

export default interface Wood extends MaterialData {
	clone(): Wood;
	clone(): Object;
	clone(): MaterialData;
	getData(): number;
	getItemType(): Material;
	getSpecies(): TreeSpecies;
	setData(data: number): void;
	setSpecies(species: TreeSpecies): void;
	toItemStack(): ItemStack;
	toItemStack(amount: number): ItemStack;
}

export default class Wood {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.Wood');
	}
	public static $isInstance(obj: any): obj is Wood {
		return obj instanceof Wood.$javaClass;
	}

	constructor();
	constructor(species: TreeSpecies);
	constructor(type: Material);
	constructor(type: Material, data: number);
	constructor(type: Material, species: TreeSpecies);
	constructor(...args: any[]) {
		return new Wood.$javaClass(...args);
	}

}

