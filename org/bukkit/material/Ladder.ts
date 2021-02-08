declare var Java: any;
import BlockFace from '../../../org/bukkit/block/BlockFace.js'
import Class from '../../../java/lang/Class.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from './MaterialData.js'
import Object from '../../../java/lang/Object.js'
import SimpleAttachableMaterialData from './SimpleAttachableMaterialData.js'
import String from '../../../java/lang/String.js'

export default interface Ladder extends SimpleAttachableMaterialData {
	clone(): MaterialData;
	clone(): Ladder;
	clone(): Object;
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
	public static $isInstance(obj: any): obj is Ladder {
		return obj instanceof Ladder.$javaClass;
	}

	constructor();
	constructor(type: Material);
	constructor(type: Material, data: number);
	constructor(...args: any[]) {
		return new Ladder.$javaClass(...args);
	}

}

