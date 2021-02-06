declare var Java: any;
import BlockFace from '../../../org/bukkit/block/BlockFace.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from './MaterialData.js'
import SimpleAttachableMaterialData from './SimpleAttachableMaterialData.js'

export default interface Ladder extends SimpleAttachableMaterialData {
	clone(): MaterialData;
	clone(): Ladder;
	clone(): any;
	clone(): SimpleAttachableMaterialData;
	getAttachedFace(): BlockFace;
	getData(): number;
	getFacing(): BlockFace;
	getItemType(): Material;
	setData(data: number): void;
	setFacingDirection(face: BlockFace): void;
	toItemStack(): ItemStack;
	toItemStack(amount: number): ItemStack;
}

export default class Ladder {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.Ladder');
	}

	constructor();
	constructor(type: Material);
	constructor(type: Material, data: number);
	constructor(...args: any[]) {
		return new Ladder.$javaClass(...args);
	}

}
