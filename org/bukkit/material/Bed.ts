declare var Java: any;
import BlockFace from '../../../org/bukkit/block/BlockFace.js'
import Class from '../../../java/lang/Class.js'
import Directional from './Directional.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from './MaterialData.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'

export default interface Bed extends MaterialData, Directional {
	clone(): Bed;
	clone(): Object;
	clone(): MaterialData;
	getData(): number;
	getFacing(): BlockFace;
	getItemType(): Material;
	isHeadOfBed(): boolean;
	setData(data: number): void;
	setFacingDirection(face: BlockFace): void;
	setHeadOfBed(isHeadOfBed: boolean): void;
	toItemStack(): ItemStack;
	toItemStack(amount: number): ItemStack;
}

export default class Bed {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.Bed');
	}
	public static $isInstance(obj: any): obj is Bed {
		return obj instanceof Bed.$javaClass;
	}

	constructor();
	constructor(direction: BlockFace);
	constructor(type: Material);
	constructor(type: Material, data: number);
	constructor(...args: any[]) {
		return new Bed.$javaClass(...args);
	}

}

