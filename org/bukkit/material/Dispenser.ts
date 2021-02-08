declare var Java: any;
import BlockFace from '../../../org/bukkit/block/BlockFace.js'
import Class from '../../../java/lang/Class.js'
import DirectionalContainer from './DirectionalContainer.js'
import FurnaceAndDispenser from './FurnaceAndDispenser.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from './MaterialData.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'

export default interface Dispenser extends FurnaceAndDispenser {
	clone(): MaterialData;
	clone(): DirectionalContainer;
	clone(): Dispenser;
	clone(): Object;
	clone(): FurnaceAndDispenser;
	getData(): number;
	getFacing(): BlockFace;
	getItemType(): Material;
	setData(data: number): void;
	setFacingDirection(face: BlockFace): void;
	toItemStack(): ItemStack;
	toItemStack(amount: number): ItemStack;
}

export default class Dispenser {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.Dispenser');
	}
	public static $isInstance(obj: any): obj is Dispenser {
		return obj instanceof Dispenser.$javaClass;
	}

	constructor();
	constructor(direction: BlockFace);
	constructor(type: Material);
	constructor(type: Material, data: number);
	constructor(...args: any[]) {
		return new Dispenser.$javaClass(...args);
	}

}

