declare var Java: any;
import GrassSpecies from '../../../org/bukkit/GrassSpecies.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from './MaterialData.js'

export default interface LongGrass extends MaterialData {
	clone(): any;
	clone(): MaterialData;
	clone(): LongGrass;
	getData(): number;
	getItemType(): Material;
	getSpecies(): GrassSpecies;
	setData(data: number): void;
	setSpecies(species: GrassSpecies): void;
	toItemStack(): ItemStack;
	toItemStack(amount: number): ItemStack;
}

export default class LongGrass {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.LongGrass');
	}
	public static $isInstance(obj: any): obj is LongGrass {
		return obj instanceof LongGrass.$javaClass;
	}

	constructor();
	constructor(type: Material);
	constructor(species: GrassSpecies);
	constructor(type: Material, data: number);
	constructor(...args: any[]) {
		return new LongGrass.$javaClass(...args);
	}

}

