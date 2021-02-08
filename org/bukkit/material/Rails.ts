declare var Java: any;
import BlockFace from '../../../org/bukkit/block/BlockFace.js'
import Class from '../../../java/lang/Class.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from './MaterialData.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'

export default interface Rails extends MaterialData {
	clone(): Rails;
	clone(): Object;
	clone(): MaterialData;
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

export default class Rails {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.Rails');
	}
	public static $isInstance(obj: any): obj is Rails {
		return obj instanceof Rails.$javaClass;
	}

	constructor();
	constructor(type: Material);
	constructor(type: Material, data: number);
	constructor(...args: any[]) {
		return new Rails.$javaClass(...args);
	}

}

