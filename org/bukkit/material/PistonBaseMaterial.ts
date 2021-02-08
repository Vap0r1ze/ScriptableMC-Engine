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

export default interface PistonBaseMaterial extends MaterialData, Directional, Redstone {
	clone(): MaterialData;
	clone(): Object;
	clone(): PistonBaseMaterial;
	getData(): number;
	getFacing(): BlockFace;
	getItemType(): Material;
	isPowered(): boolean;
	isSticky(): boolean;
	setData(data: number): void;
	setFacingDirection(face: BlockFace): void;
	setPowered(powered: boolean): void;
	toItemStack(): ItemStack;
	toItemStack(amount: number): ItemStack;
}

export default class PistonBaseMaterial {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.PistonBaseMaterial');
	}
	public static $isInstance(obj: any): obj is PistonBaseMaterial {
		return obj instanceof PistonBaseMaterial.$javaClass;
	}

	constructor(type: Material);
	constructor(type: Material, data: number);
	constructor(...args: any[]) {
		return new PistonBaseMaterial.$javaClass(...args);
	}

}

