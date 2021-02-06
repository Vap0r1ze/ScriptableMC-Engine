declare var Java: any;
import BlockFace from '../../../org/bukkit/block/BlockFace.js'
import DirectionalContainer from './DirectionalContainer.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from './MaterialData.js'

export default interface Chest extends DirectionalContainer {
	clone(): any;
	clone(): MaterialData;
	clone(): DirectionalContainer;
	clone(): Chest;
	getData(): number;
	getFacing(): BlockFace;
	getItemType(): Material;
	setData(data: number): void;
	setFacingDirection(face: BlockFace): void;
	toItemStack(): ItemStack;
	toItemStack(amount: number): ItemStack;
}

export default class Chest {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.Chest');
	}

	constructor();
	constructor(type: Material);
	constructor(direction: BlockFace);
	constructor(type: Material, data: number);
	constructor(...args: any[]) {
		return new Chest.$javaClass(...args);
	}

}

