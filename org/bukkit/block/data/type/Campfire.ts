declare var Java: any;
import BlockData from '../../../../../org/bukkit/block/data/BlockData.js'
import BlockFace from '../../../../../org/bukkit/block/BlockFace.js'
import Directional from '../../../../../org/bukkit/block/data/Directional.js'
import Lightable from '../../../../../org/bukkit/block/data/Lightable.js'
import Material from '../../../../../org/bukkit/Material.js'
import SoundGroup from '../../../../../org/bukkit/SoundGroup.js'
import Waterlogged from '../../../../../org/bukkit/block/data/Waterlogged.js'

export default interface Campfire extends Directional, Lightable, Waterlogged {
	clone(): BlockData;
	clone(): any;
	getAsString(): string;
	getAsString(arg0: boolean): string;
	getFaces(): any;
	getFacing(): BlockFace;
	getMaterial(): Material;
	getSoundGroup(): SoundGroup;
	isLit(): boolean;
	isSignalFire(): boolean;
	isWaterlogged(): boolean;
	matches(arg0: BlockData): boolean;
	merge(arg0: BlockData): BlockData;
	setFacing(arg0: BlockFace): void;
	setLit(arg0: boolean): void;
	setSignalFire(arg0: boolean): void;
	setWaterlogged(arg0: boolean): void;
}

export default class Campfire {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.Campfire');
	}
	public static $isInstance(obj: any): obj is Campfire {
		return obj instanceof Campfire.$javaClass;
	}

}

