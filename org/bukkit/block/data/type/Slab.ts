declare var Java: any;
import BlockData from '../../../../../org/bukkit/block/data/BlockData.js'
import Material from '../../../../../org/bukkit/Material.js'
import Object from '../../../../../java/lang/Object.js'
import Slab$Type from './Slab$Type.js'
import SoundGroup from '../../../../../org/bukkit/SoundGroup.js'
import String from '../../../../../java/lang/String.js'
import Waterlogged from '../../../../../org/bukkit/block/data/Waterlogged.js'

export default interface Slab extends Waterlogged {
	clone(): BlockData;
	clone(): Object;
	getAsString(): string;
	getAsString(arg0: boolean): string;
	getMaterial(): Material;
	getSoundGroup(): SoundGroup;
	getType(): Slab$Type;
	isWaterlogged(): boolean;
	matches(arg0: BlockData): boolean;
	merge(arg0: BlockData): BlockData;
	setType(arg0: Slab$Type): void;
	setWaterlogged(arg0: boolean): void;
}

export default class Slab {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.Slab');
	}
	public static $isInstance(obj: any): obj is Slab {
		return obj instanceof Slab.$javaClass;
	}

}

