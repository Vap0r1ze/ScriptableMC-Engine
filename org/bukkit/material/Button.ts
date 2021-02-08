declare var Java: any;
import BlockFace from '../../../org/bukkit/block/BlockFace.js'
import Class from '../../../java/lang/Class.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from './MaterialData.js'
import Object from '../../../java/lang/Object.js'
import Redstone from './Redstone.js'
import SimpleAttachableMaterialData from './SimpleAttachableMaterialData.js'
import String from '../../../java/lang/String.js'

export default interface Button extends SimpleAttachableMaterialData, Redstone {
	clone(): MaterialData;
	clone(): Button;
	clone(): Object;
	clone(): SimpleAttachableMaterialData;
	getAttachedFace(): BlockFace;
	getData(): number;
	getFacing(): BlockFace;
	getItemType(): Material;
	isPowered(): boolean;
	setData(data: number): void;
	setFacingDirection(face: BlockFace): void;
	setPowered(bool: boolean): void;
	toItemStack(): ItemStack;
	toItemStack(amount: number): ItemStack;
}

export default class Button {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.Button');
	}
	public static $isInstance(obj: any): obj is Button {
		return obj instanceof Button.$javaClass;
	}

	constructor();
	constructor(type: Material);
	constructor(type: Material, data: number);
	constructor(...args: any[]) {
		return new Button.$javaClass(...args);
	}

}

