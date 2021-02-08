declare var Java: any;
import BlockData from '../../../../../org/bukkit/block/data/BlockData.js'
import BlockFace from '../../../../../org/bukkit/block/BlockFace.js'
import Material from '../../../../../org/bukkit/Material.js'
import Object from '../../../../../java/lang/Object.js'
import Set from '../../../../../java/util/Set.js'
import SoundGroup from '../../../../../org/bukkit/SoundGroup.js'
import String from '../../../../../java/lang/String.js'
import TechnicalPiston from './TechnicalPiston.js'
import TechnicalPiston$Type from './TechnicalPiston$Type.js'

export default interface PistonHead extends TechnicalPiston {
	clone(): BlockData;
	clone(): Object;
	getAsString(): string;
	getAsString(arg0: boolean): string;
	getFaces(): Set;
	getFacing(): BlockFace;
	getMaterial(): Material;
	getSoundGroup(): SoundGroup;
	getType(): TechnicalPiston$Type;
	isShort(): boolean;
	matches(arg0: BlockData): boolean;
	merge(arg0: BlockData): BlockData;
	setFacing(arg0: BlockFace): void;
	setShort(arg0: boolean): void;
	setType(arg0: TechnicalPiston$Type): void;
}

export default class PistonHead {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.PistonHead');
	}
	public static $isInstance(obj: any): obj is PistonHead {
		return obj instanceof PistonHead.$javaClass;
	}

}

