declare var Java: any;
import BlockFace from '../../../org/bukkit/block/BlockFace.js'
import Class from '../../../java/lang/Class.js'
import Directional from './Directional.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from './MaterialData.js'
import Object from '../../../java/lang/Object.js'
import Openable from './Openable.js'
import String from '../../../java/lang/String.js'

export default interface Gate extends MaterialData, Directional, Openable {
	clone(): Gate;
	clone(): Object;
	clone(): MaterialData;
	getData(): number;
	getFacing(): BlockFace;
	getItemType(): Material;
	isOpen(): boolean;
	setData(data: number): void;
	setFacingDirection(face: BlockFace): void;
	setOpen(isOpen: boolean): void;
	toItemStack(): ItemStack;
	toItemStack(amount: number): ItemStack;
}

export default class Gate {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.Gate');
	}
	public static $isInstance(obj: any): obj is Gate {
		return obj instanceof Gate.$javaClass;
	}

	constructor();
	constructor(data: number);
	constructor(type: Material, data: number);
	constructor(...args: any[]) {
		return new Gate.$javaClass(...args);
	}

}

