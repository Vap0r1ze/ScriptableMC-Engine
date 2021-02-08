declare var Java: any;
import Ageable from '../../../../../org/bukkit/block/data/Ageable.js'
import BlockData from '../../../../../org/bukkit/block/data/BlockData.js'
import BlockFace from '../../../../../org/bukkit/block/BlockFace.js'
import Directional from '../../../../../org/bukkit/block/data/Directional.js'
import Material from '../../../../../org/bukkit/Material.js'
import Object from '../../../../../java/lang/Object.js'
import Set from '../../../../../java/util/Set.js'
import SoundGroup from '../../../../../org/bukkit/SoundGroup.js'
import String from '../../../../../java/lang/String.js'

export default interface Cocoa extends Ageable, Directional {
	clone(): BlockData;
	clone(): Object;
	getAge(): number;
	getAsString(): string;
	getAsString(arg0: boolean): string;
	getFaces(): Set;
	getFacing(): BlockFace;
	getMaterial(): Material;
	getMaximumAge(): number;
	getSoundGroup(): SoundGroup;
	matches(arg0: BlockData): boolean;
	merge(arg0: BlockData): BlockData;
	setAge(arg0: number): void;
	setFacing(arg0: BlockFace): void;
}

export default class Cocoa {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.Cocoa');
	}
	public static $isInstance(obj: any): obj is Cocoa {
		return obj instanceof Cocoa.$javaClass;
	}

}

