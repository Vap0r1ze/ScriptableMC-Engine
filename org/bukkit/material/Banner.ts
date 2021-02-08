declare var Java: any;
import Attachable from './Attachable.js'
import BlockFace from '../../../org/bukkit/block/BlockFace.js'
import Class from '../../../java/lang/Class.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from './MaterialData.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'

export default interface Banner extends MaterialData, Attachable {
	clone(): Object;
	clone(): Banner;
	clone(): MaterialData;
	getAttachedFace(): BlockFace;
	getData(): number;
	getFacing(): BlockFace;
	getItemType(): Material;
	isWallBanner(): boolean;
	setData(data: number): void;
	setFacingDirection(face: BlockFace): void;
	toItemStack(): ItemStack;
	toItemStack(amount: number): ItemStack;
}

export default class Banner {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.Banner');
	}
	public static $isInstance(obj: any): obj is Banner {
		return obj instanceof Banner.$javaClass;
	}

	constructor();
	constructor(type: Material);
	constructor(type: Material, data: number);
	constructor(...args: any[]) {
		return new Banner.$javaClass(...args);
	}

}

