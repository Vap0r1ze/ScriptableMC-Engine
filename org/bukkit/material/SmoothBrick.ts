declare var Java: any;
import Class from '../../../java/lang/Class.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import List from '../../../java/util/List.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from './MaterialData.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'
import TexturedMaterial from './TexturedMaterial.js'

export default interface SmoothBrick extends TexturedMaterial {
	clone(): MaterialData;
	clone(): Object;
	clone(): TexturedMaterial;
	clone(): SmoothBrick;
	getData(): number;
	getItemType(): Material;
	getMaterial(): Material;
	getTextures(): Array<Material>;
	setData(data: number): void;
	setMaterial(material: Material): void;
	toItemStack(): ItemStack;
	toItemStack(amount: number): ItemStack;
}

export default class SmoothBrick {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.SmoothBrick');
	}
	public static $isInstance(obj: any): obj is SmoothBrick {
		return obj instanceof SmoothBrick.$javaClass;
	}

	constructor();
	constructor(type: Material);
	constructor(type: Material, data: number);
	constructor(...args: any[]) {
		return new SmoothBrick.$javaClass(...args);
	}

}

