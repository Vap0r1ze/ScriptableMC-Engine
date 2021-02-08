declare var Java: any;
import BlockFace from '../../../org/bukkit/block/BlockFace.js'
import Class from '../../../java/lang/Class.js'
import Directional from './Directional.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from './MaterialData.js'
import Object from '../../../java/lang/Object.js'
import Redstone from './Redstone.js'
import String from '../../../java/lang/String.js'

export default interface Comparator extends MaterialData, Directional, Redstone {
	clone(): Comparator;
	clone(): Object;
	clone(): MaterialData;
	getData(): number;
	getFacing(): BlockFace;
	getItemType(): Material;
	isBeingPowered(): boolean;
	isPowered(): boolean;
	isSubtractionMode(): boolean;
	setData(data: number): void;
	setFacingDirection(face: BlockFace): void;
	setSubtractionMode(isSubtraction: boolean): void;
	toItemStack(): ItemStack;
	toItemStack(amount: number): ItemStack;
}

export default class Comparator {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.Comparator');
	}
	public static $isInstance(obj: any): obj is Comparator {
		return obj instanceof Comparator.$javaClass;
	}

	constructor();
	constructor(facingDirection: BlockFace);
	constructor(type: Material);
	constructor(facingDirection: BlockFace, isSubtraction: boolean);
	constructor(type: Material, data: number);
	constructor(facingDirection: BlockFace, isSubtraction: boolean, state: boolean);
	constructor(...args: any[]) {
		return new Comparator.$javaClass(...args);
	}

}

