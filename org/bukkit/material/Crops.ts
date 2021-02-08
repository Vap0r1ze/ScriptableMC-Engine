declare var Java: any;
import Class from '../../../java/lang/Class.js'
import CropState from '../../../org/bukkit/CropState.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from './MaterialData.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'

export default interface Crops extends MaterialData {
	clone(): MaterialData;
	clone(): Object;
	clone(): Crops;
	getData(): number;
	getItemType(): Material;
	getState(): CropState;
	setData(data: number): void;
	setState(state: CropState): void;
	toItemStack(): ItemStack;
	toItemStack(amount: number): ItemStack;
}

export default class Crops {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.Crops');
	}
	public static $isInstance(obj: any): obj is Crops {
		return obj instanceof Crops.$javaClass;
	}

	constructor();
	constructor(type: Material);
	constructor(state: CropState);
	constructor(type: Material, state: CropState);
	constructor(type: Material, data: number);
	constructor(...args: any[]) {
		return new Crops.$javaClass(...args);
	}

}

