declare var Java: any;
import Attachable from '../../../../../org/bukkit/block/data/Attachable.js'
import BlockData from '../../../../../org/bukkit/block/data/BlockData.js'
import BlockFace from '../../../../../org/bukkit/block/BlockFace.js'
import Directional from '../../../../../org/bukkit/block/data/Directional.js'
import Material from '../../../../../org/bukkit/Material.js'
import Object from '../../../../../java/lang/Object.js'
import Powerable from '../../../../../org/bukkit/block/data/Powerable.js'
import Set from '../../../../../java/util/Set.js'
import SoundGroup from '../../../../../org/bukkit/SoundGroup.js'
import String from '../../../../../java/lang/String.js'

export default interface TripwireHook extends Attachable, Directional, Powerable {
	clone(): BlockData;
	clone(): Object;
	getAsString(): string;
	getAsString(arg0: boolean): string;
	getFaces(): Set;
	getFacing(): BlockFace;
	getMaterial(): Material;
	getSoundGroup(): SoundGroup;
	isAttached(): boolean;
	isPowered(): boolean;
	matches(arg0: BlockData): boolean;
	merge(arg0: BlockData): BlockData;
	setAttached(arg0: boolean): void;
	setFacing(arg0: BlockFace): void;
	setPowered(arg0: boolean): void;
}

export default class TripwireHook {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.TripwireHook');
	}
	public static $isInstance(obj: any): obj is TripwireHook {
		return obj instanceof TripwireHook.$javaClass;
	}

}

