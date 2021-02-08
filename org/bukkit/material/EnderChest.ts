declare var Java: any;
import BlockFace from '../../../org/bukkit/block/BlockFace.js'
import Class from '../../../java/lang/Class.js'
import DirectionalContainer from './DirectionalContainer.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from './MaterialData.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'

export default interface EnderChest extends DirectionalContainer {
	clone(): Object;
	clone(): MaterialData;
	clone(): DirectionalContainer;
	clone(): EnderChest;
	getData(): number;
	getFacing(): BlockFace;
	getItemType(): Material;
	setData(data: number): void;
	setFacingDirection(face: BlockFace): void;
	toItemStack(): ItemStack;
	toItemStack(amount: number): ItemStack;
}

export default class EnderChest {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.EnderChest');
	}
	public static $isInstance(obj: any): obj is EnderChest {
		return obj instanceof EnderChest.$javaClass;
	}

	constructor();
	constructor(type: Material);
	constructor(direction: BlockFace);
	constructor(type: Material, data: number);
	constructor(...args: any[]) {
		return new EnderChest.$javaClass(...args);
	}

}

