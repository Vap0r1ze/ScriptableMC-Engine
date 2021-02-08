declare var Java: any;
import Class from '../../../java/lang/Class.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import List from '../../../java/util/List.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from './MaterialData.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'
import TexturedMaterial from './TexturedMaterial.js'

export default interface Step extends TexturedMaterial {
	clone(): MaterialData;
	clone(): Object;
	clone(): TexturedMaterial;
	clone(): Step;
	getData(): number;
	getItemType(): Material;
	getMaterial(): Material;
	getTextures(): Array<Material>;
	isInverted(): boolean;
	setData(data: number): void;
	setInverted(inv: boolean): void;
	setMaterial(material: Material): void;
	toItemStack(): ItemStack;
	toItemStack(amount: number): ItemStack;
}

export default class Step {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.Step');
	}
	public static $isInstance(obj: any): obj is Step {
		return obj instanceof Step.$javaClass;
	}

	constructor();
	constructor(type: Material);
	constructor(type: Material, data: number);
	constructor(...args: any[]) {
		return new Step.$javaClass(...args);
	}

}

