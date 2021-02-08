declare var Java: any;
import Class from '../../../java/lang/Class.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from './MaterialData.js'
import NetherWartsState from '../../../org/bukkit/NetherWartsState.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'

export default interface NetherWarts extends MaterialData {
	clone(): Object;
	clone(): MaterialData;
	clone(): NetherWarts;
	getData(): number;
	getItemType(): Material;
	getState(): NetherWartsState;
	setData(data: number): void;
	setState(state: NetherWartsState): void;
	toItemStack(): ItemStack;
	toItemStack(amount: number): ItemStack;
}

export default class NetherWarts {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.NetherWarts');
	}
	public static $isInstance(obj: any): obj is NetherWarts {
		return obj instanceof NetherWarts.$javaClass;
	}

	constructor();
	constructor(state: NetherWartsState);
	constructor(type: Material);
	constructor(type: Material, data: number);
	constructor(...args: any[]) {
		return new NetherWarts.$javaClass(...args);
	}

}

