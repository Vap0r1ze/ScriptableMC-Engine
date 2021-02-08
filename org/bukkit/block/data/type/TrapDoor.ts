declare var Java: any;
import Bisected from '../../../../../org/bukkit/block/data/Bisected.js'
import Bisected$Half from '../../../../../org/bukkit/block/data/Bisected$Half.js'
import BlockData from '../../../../../org/bukkit/block/data/BlockData.js'
import BlockFace from '../../../../../org/bukkit/block/BlockFace.js'
import Directional from '../../../../../org/bukkit/block/data/Directional.js'
import Material from '../../../../../org/bukkit/Material.js'
import Object from '../../../../../java/lang/Object.js'
import Openable from '../../../../../org/bukkit/block/data/Openable.js'
import Powerable from '../../../../../org/bukkit/block/data/Powerable.js'
import Set from '../../../../../java/util/Set.js'
import SoundGroup from '../../../../../org/bukkit/SoundGroup.js'
import String from '../../../../../java/lang/String.js'
import Waterlogged from '../../../../../org/bukkit/block/data/Waterlogged.js'

export default interface TrapDoor extends Bisected, Directional, Openable, Powerable, Waterlogged {
	clone(): BlockData;
	clone(): Object;
	getAsString(): string;
	getAsString(arg0: boolean): string;
	getFaces(): Set;
	getFacing(): BlockFace;
	getHalf(): Bisected$Half;
	getMaterial(): Material;
	getSoundGroup(): SoundGroup;
	isOpen(): boolean;
	isPowered(): boolean;
	isWaterlogged(): boolean;
	matches(arg0: BlockData): boolean;
	merge(arg0: BlockData): BlockData;
	setFacing(arg0: BlockFace): void;
	setHalf(arg0: Bisected$Half): void;
	setOpen(arg0: boolean): void;
	setPowered(arg0: boolean): void;
	setWaterlogged(arg0: boolean): void;
}

export default class TrapDoor {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.TrapDoor');
	}
	public static $isInstance(obj: any): obj is TrapDoor {
		return obj instanceof TrapDoor.$javaClass;
	}

}

