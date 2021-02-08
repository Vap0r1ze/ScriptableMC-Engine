declare var Java: any;
import BlockFace from '../../../org/bukkit/block/BlockFace.js'
import Class from '../../../java/lang/Class.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from './MaterialData.js'
import Object from '../../../java/lang/Object.js'
import Rails from './Rails.js'
import String from '../../../java/lang/String.js'

export default interface ExtendedRails extends Rails {
	clone(): MaterialData;
	clone(): Object;
	clone(): Rails;
	clone(): ExtendedRails;
	getData(): number;
	getDirection(): BlockFace;
	getItemType(): Material;
	isCurve(): boolean;
	isOnSlope(): boolean;
	setData(data: number): void;
	setDirection(face: BlockFace, isOnSlope: boolean): void;
	toItemStack(): ItemStack;
	toItemStack(amount: number): ItemStack;
}

export default class ExtendedRails {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.ExtendedRails');
	}
	public static $isInstance(obj: any): obj is ExtendedRails {
		return obj instanceof ExtendedRails.$javaClass;
	}

	constructor(type: Material);
	constructor(type: Material, data: number);
	constructor(...args: any[]) {
		return new ExtendedRails.$javaClass(...args);
	}

}

