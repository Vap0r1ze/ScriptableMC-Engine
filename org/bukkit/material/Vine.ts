declare var Java: any;
import BlockFace from '../../../org/bukkit/block/BlockFace.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from './MaterialData.js'

export default interface Vine extends MaterialData {
	clone(): Vine;
	clone(): any;
	clone(): MaterialData;
	getData(): number;
	getItemType(): Material;
	isOnFace(face: BlockFace): boolean;
	putOnFace(face: BlockFace): void;
	removeFromFace(face: BlockFace): void;
	setData(data: number): void;
	toItemStack(): ItemStack;
	toItemStack(amount: number): ItemStack;
}

export default class Vine {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.Vine');
	}
	public static $isInstance(obj: any): obj is Vine {
		return obj instanceof Vine.$javaClass;
	}

	constructor();
	constructor(data: number);
	constructor(faces: any);
	constructor(faces: Array<BlockFace>);
	constructor(type: Material, data: number);
	constructor(...args: any[]) {
		return new Vine.$javaClass(...args);
	}

}

