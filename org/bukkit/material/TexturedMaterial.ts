declare var Java: any;
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from './MaterialData.js'

export default interface TexturedMaterial extends MaterialData {
	clone(): MaterialData;
	clone(): any;
	clone(): TexturedMaterial;
	getData(): number;
	getItemType(): Material;
	getMaterial(): Material;
	getTextures(): Array<Material>;
	setData(data: number): void;
	setMaterial(material: Material): void;
	toItemStack(): ItemStack;
	toItemStack(amount: number): ItemStack;
}

export default class TexturedMaterial {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.TexturedMaterial');
	}
	public static $isInstance(obj: any): obj is TexturedMaterial {
		return obj instanceof TexturedMaterial.$javaClass;
	}

	constructor(m: Material);
	constructor(type: Material, data: number);
	constructor(...args: any[]) {
		return new TexturedMaterial.$javaClass(...args);
	}

}

