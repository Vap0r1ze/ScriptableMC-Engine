declare var Java: any;
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from './MaterialData.js'
import TexturedMaterial from './TexturedMaterial.js'

export default interface MonsterEggs extends TexturedMaterial {
	clone(): MaterialData;
	clone(): any;
	clone(): TexturedMaterial;
	clone(): MonsterEggs;
	getData(): number;
	getItemType(): Material;
	getMaterial(): Material;
	getTextures(): Array<Material>;
	setData(data: number): void;
	setMaterial(material: Material): void;
	toItemStack(): ItemStack;
	toItemStack(amount: number): ItemStack;
}

export default class MonsterEggs {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.MonsterEggs');
	}
	public static $isInstance(obj: any): obj is MonsterEggs {
		return obj instanceof MonsterEggs.$javaClass;
	}

	constructor();
	constructor(type: Material);
	constructor(type: Material, data: number);
	constructor(...args: any[]) {
		return new MonsterEggs.$javaClass(...args);
	}

}

