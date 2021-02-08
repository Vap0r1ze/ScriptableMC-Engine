declare var Java: any;
import Class from '../../../java/lang/Class.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from './MaterialData.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'

export default interface Tripwire extends MaterialData {
	clone(): Tripwire;
	clone(): MaterialData;
	clone(): Object;
	getData(): number;
	getItemType(): Material;
	isActivated(): boolean;
	isObjectTriggering(): boolean;
	setActivated(act: boolean): void;
	setData(data: number): void;
	setObjectTriggering(trig: boolean): void;
	toItemStack(): ItemStack;
	toItemStack(amount: number): ItemStack;
}

export default class Tripwire {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.Tripwire');
	}
	public static $isInstance(obj: any): obj is Tripwire {
		return obj instanceof Tripwire.$javaClass;
	}

	constructor();
	constructor(type: Material, data: number);
	constructor(...args: any[]) {
		return new Tripwire.$javaClass(...args);
	}

}

