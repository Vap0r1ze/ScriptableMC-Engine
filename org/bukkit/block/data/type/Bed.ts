declare var Java: any;
import Bed$Part from './Bed$Part.js'
import BlockData from '../../../../../org/bukkit/block/data/BlockData.js'
import BlockFace from '../../../../../org/bukkit/block/BlockFace.js'
import Directional from '../../../../../org/bukkit/block/data/Directional.js'
import Material from '../../../../../org/bukkit/Material.js'
import Object from '../../../../../java/lang/Object.js'
import Set from '../../../../../java/util/Set.js'
import SoundGroup from '../../../../../org/bukkit/SoundGroup.js'
import String from '../../../../../java/lang/String.js'

export default interface Bed extends Directional {
	clone(): BlockData;
	clone(): Object;
	getAsString(): string;
	getAsString(arg0: boolean): string;
	getFaces(): Set;
	getFacing(): BlockFace;
	getMaterial(): Material;
	getPart(): Bed$Part;
	getSoundGroup(): SoundGroup;
	isOccupied(): boolean;
	matches(arg0: BlockData): boolean;
	merge(arg0: BlockData): BlockData;
	setFacing(arg0: BlockFace): void;
	setPart(arg0: Bed$Part): void;
}

export default class Bed {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.Bed');
	}
	public static $isInstance(obj: any): obj is Bed {
		return obj instanceof Bed.$javaClass;
	}

}

