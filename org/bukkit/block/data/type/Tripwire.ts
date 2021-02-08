declare var Java: any;
import Attachable from '../../../../../org/bukkit/block/data/Attachable.js'
import BlockData from '../../../../../org/bukkit/block/data/BlockData.js'
import BlockFace from '../../../../../org/bukkit/block/BlockFace.js'
import Material from '../../../../../org/bukkit/Material.js'
import MultipleFacing from '../../../../../org/bukkit/block/data/MultipleFacing.js'
import Object from '../../../../../java/lang/Object.js'
import Powerable from '../../../../../org/bukkit/block/data/Powerable.js'
import Set from '../../../../../java/util/Set.js'
import SoundGroup from '../../../../../org/bukkit/SoundGroup.js'
import String from '../../../../../java/lang/String.js'

export default interface Tripwire extends Attachable, MultipleFacing, Powerable {
	clone(): BlockData;
	clone(): Object;
	getAllowedFaces(): Set;
	getAsString(): string;
	getAsString(arg0: boolean): string;
	getFaces(): Set;
	getMaterial(): Material;
	getSoundGroup(): SoundGroup;
	hasFace(arg0: BlockFace): boolean;
	isAttached(): boolean;
	isDisarmed(): boolean;
	isPowered(): boolean;
	matches(arg0: BlockData): boolean;
	merge(arg0: BlockData): BlockData;
	setAttached(arg0: boolean): void;
	setDisarmed(arg0: boolean): void;
	setFace(arg0: BlockFace, arg1: boolean): void;
	setPowered(arg0: boolean): void;
}

export default class Tripwire {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.Tripwire');
	}
	public static $isInstance(obj: any): obj is Tripwire {
		return obj instanceof Tripwire.$javaClass;
	}

}

