declare var Java: any;
import BlockData from '../../../../../org/bukkit/block/data/BlockData.js'
import BlockFace from '../../../../../org/bukkit/block/BlockFace.js'
import Comparator$Mode from './Comparator$Mode.js'
import Directional from '../../../../../org/bukkit/block/data/Directional.js'
import Material from '../../../../../org/bukkit/Material.js'
import Object from '../../../../../java/lang/Object.js'
import Powerable from '../../../../../org/bukkit/block/data/Powerable.js'
import Set from '../../../../../java/util/Set.js'
import SoundGroup from '../../../../../org/bukkit/SoundGroup.js'
import String from '../../../../../java/lang/String.js'

export default interface Comparator extends Directional, Powerable {
	clone(): BlockData;
	clone(): Object;
	getAsString(): string;
	getAsString(arg0: boolean): string;
	getFaces(): Set;
	getFacing(): BlockFace;
	getMaterial(): Material;
	getMode(): Comparator$Mode;
	getSoundGroup(): SoundGroup;
	isPowered(): boolean;
	matches(arg0: BlockData): boolean;
	merge(arg0: BlockData): BlockData;
	setFacing(arg0: BlockFace): void;
	setMode(arg0: Comparator$Mode): void;
	setPowered(arg0: boolean): void;
}

export default class Comparator {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.Comparator');
	}
	public static $isInstance(obj: any): obj is Comparator {
		return obj instanceof Comparator.$javaClass;
	}

}

