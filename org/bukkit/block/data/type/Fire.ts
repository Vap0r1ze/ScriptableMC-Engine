declare var Java: any;
import Ageable from '../../../../../org/bukkit/block/data/Ageable.js'
import BlockData from '../../../../../org/bukkit/block/data/BlockData.js'
import BlockFace from '../../../../../org/bukkit/block/BlockFace.js'
import Material from '../../../../../org/bukkit/Material.js'
import MultipleFacing from '../../../../../org/bukkit/block/data/MultipleFacing.js'
import Object from '../../../../../java/lang/Object.js'
import Set from '../../../../../java/util/Set.js'
import SoundGroup from '../../../../../org/bukkit/SoundGroup.js'
import String from '../../../../../java/lang/String.js'

export default interface Fire extends Ageable, MultipleFacing {
	clone(): BlockData;
	clone(): Object;
	getAge(): number;
	getAllowedFaces(): Set;
	getAsString(): string;
	getAsString(arg0: boolean): string;
	getFaces(): Set;
	getMaterial(): Material;
	getMaximumAge(): number;
	getSoundGroup(): SoundGroup;
	hasFace(arg0: BlockFace): boolean;
	matches(arg0: BlockData): boolean;
	merge(arg0: BlockData): BlockData;
	setAge(arg0: number): void;
	setFace(arg0: BlockFace, arg1: boolean): void;
}

export default class Fire {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.Fire');
	}
	public static $isInstance(obj: any): obj is Fire {
		return obj instanceof Fire.$javaClass;
	}

}

