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

export default interface Hopper extends MaterialData, Directional, Redstone {
	clone(): Hopper;
	clone(): Object;
	clone(): MaterialData;
	getData(): number;
	getFacing(): BlockFace;
	getItemType(): Material;
	isActive(): boolean;
	isPowered(): boolean;
	setActive(isActive: boolean): void;
	setData(data: number): void;
	setFacingDirection(face: BlockFace): void;
	toItemStack(): ItemStack;
	toItemStack(amount: number): ItemStack;
}

export default class Hopper {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.Hopper');
	}
	public static $isInstance(obj: any): obj is Hopper {
		return obj instanceof Hopper.$javaClass;
	}

	constructor();
	constructor(facingDirection: BlockFace);
	constructor(type: Material);
	constructor(facingDirection: BlockFace, isActive: boolean);
	constructor(type: Material, data: number);
	constructor(...args: any[]) {
		return new Hopper.$javaClass(...args);
	}

}

