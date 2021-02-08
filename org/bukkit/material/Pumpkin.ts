declare var Java: any;
import BlockFace from '../../../org/bukkit/block/BlockFace.js'
import Directional from './Directional.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from './MaterialData.js'

export default interface Pumpkin extends MaterialData, Directional {
	clone(): Pumpkin;
	clone(): any;
	clone(): MaterialData;
	getData(): number;
	getFacing(): BlockFace;
	getItemType(): Material;
	isLit(): boolean;
	setData(data: number): void;
	setFacingDirection(face: BlockFace): void;
	toItemStack(): ItemStack;
	toItemStack(amount: number): ItemStack;
}

export default class Pumpkin {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.Pumpkin');
	}
	public static $isInstance(obj: any): obj is Pumpkin {
		return obj instanceof Pumpkin.$javaClass;
	}

	constructor();
	constructor(direction: BlockFace);
	constructor(type: Material);
	constructor(type: Material, data: number);
	constructor(...args: any[]) {
		return new Pumpkin.$javaClass(...args);
	}

}

