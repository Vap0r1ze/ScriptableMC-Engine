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

export default interface Furnace extends FurnaceAndDispenser {
	clone(): MaterialData;
	clone(): Object;
	clone(): DirectionalContainer;
	clone(): FurnaceAndDispenser;
	clone(): Furnace;
	getData(): number;
	getFacing(): BlockFace;
	getItemType(): Material;
	setData(data: number): void;
	setFacingDirection(face: BlockFace): void;
	toItemStack(): ItemStack;
	toItemStack(amount: number): ItemStack;
}

export default class Furnace {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.Furnace');
	}
	public static $isInstance(obj: any): obj is Furnace {
		return obj instanceof Furnace.$javaClass;
	}

	constructor();
	constructor(type: Material);
	constructor(direction: BlockFace);
	constructor(type: Material, data: number);
	constructor(...args: any[]) {
		return new Furnace.$javaClass(...args);
	}

}

