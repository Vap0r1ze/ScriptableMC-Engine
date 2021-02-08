declare var Java: any;
import BlockFace from '../../../org/bukkit/block/BlockFace.js'
import Class from '../../../java/lang/Class.js'
import Directional from './Directional.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from './MaterialData.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'

export default interface Stairs extends MaterialData, Directional {
	clone(): Stairs;
	clone(): Object;
	clone(): MaterialData;
	getAscendingDirection(): BlockFace;
	getData(): number;
	getDescendingDirection(): BlockFace;
	getFacing(): BlockFace;
	getItemType(): Material;
	isInverted(): boolean;
	setData(data: number): void;
	setFacingDirection(face: BlockFace): void;
	setInverted(inv: boolean): void;
	toItemStack(): ItemStack;
	toItemStack(amount: number): ItemStack;
}

export default class Stairs {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.Stairs');
	}
	public static $isInstance(obj: any): obj is Stairs {
		return obj instanceof Stairs.$javaClass;
	}

	constructor(type: Material);
	constructor(type: Material, data: number);
	constructor(...args: any[]) {
		return new Stairs.$javaClass(...args);
	}

}

