declare var Java: any;
import BlockFace from '../../../org/bukkit/block/BlockFace.js'
import Class from '../../../java/lang/Class.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from './MaterialData.js'
import MushroomBlockTexture from './types/MushroomBlockTexture.js'
import Object from '../../../java/lang/Object.js'
import Set from '../../../java/util/Set.js'
import String from '../../../java/lang/String.js'

export default interface Mushroom extends MaterialData {
	clone(): MaterialData;
	clone(): Object;
	clone(): Mushroom;
	getBlockTexture(): MushroomBlockTexture;
	getData(): number;
	getItemType(): Material;
	getPaintedFaces(): Set;
	isFacePainted(face: BlockFace): boolean;
	isStem(): boolean;
	setBlockTexture(texture: MushroomBlockTexture): void;
	setData(data: number): void;
	setFacePainted(face: BlockFace, painted: boolean): void;
	setStem(): void;
	toItemStack(): ItemStack;
	toItemStack(amount: number): ItemStack;
}

export default class Mushroom {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.Mushroom');
	}
	public static $isInstance(obj: any): obj is Mushroom {
		return obj instanceof Mushroom.$javaClass;
	}

	constructor(shroom: Material);
	constructor(shroom: Material, data: number);
	constructor(shroom: Material, texture: MushroomBlockTexture);
	constructor(shroom: Material, capFace: BlockFace);
	constructor(...args: any[]) {
		return new Mushroom.$javaClass(...args);
	}

}

