declare var Java: any;
import BlockData from '../../../../../org/bukkit/block/data/BlockData.js'
import BlockFace from '../../../../../org/bukkit/block/BlockFace.js'
import Directional from '../../../../../org/bukkit/block/data/Directional.js'
import Material from '../../../../../org/bukkit/Material.js'
import Object from '../../../../../java/lang/Object.js'
import Set from '../../../../../java/util/Set.js'
import SoundGroup from '../../../../../org/bukkit/SoundGroup.js'
import String from '../../../../../java/lang/String.js'

export default interface Dispenser extends Directional {
	clone(): BlockData;
	clone(): Object;
	getAsString(): string;
	getAsString(arg0: boolean): string;
	getFaces(): Set;
	getFacing(): BlockFace;
	getMaterial(): Material;
	getSoundGroup(): SoundGroup;
	isTriggered(): boolean;
	matches(arg0: BlockData): boolean;
	merge(arg0: BlockData): BlockData;
	setFacing(arg0: BlockFace): void;
	setTriggered(arg0: boolean): void;
}

export default class Dispenser {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.Dispenser');
	}
	public static $isInstance(obj: any): obj is Dispenser {
		return obj instanceof Dispenser.$javaClass;
	}

}

