declare var Java: any;
import BlockData from '../../../../../org/bukkit/block/data/BlockData.js'
import BlockFace from '../../../../../org/bukkit/block/BlockFace.js'
import Material from '../../../../../org/bukkit/Material.js'
import MultipleFacing from '../../../../../org/bukkit/block/data/MultipleFacing.js'
import Object from '../../../../../java/lang/Object.js'
import Set from '../../../../../java/util/Set.js'
import SoundGroup from '../../../../../org/bukkit/SoundGroup.js'
import String from '../../../../../java/lang/String.js'
import Waterlogged from '../../../../../org/bukkit/block/data/Waterlogged.js'

export default interface GlassPane extends MultipleFacing, Waterlogged {
	clone(): BlockData;
	clone(): Object;
	getAllowedFaces(): Set;
	getAsString(): string;
	getAsString(arg0: boolean): string;
	getFaces(): Set;
	getMaterial(): Material;
	getSoundGroup(): SoundGroup;
	hasFace(arg0: BlockFace): boolean;
	isWaterlogged(): boolean;
	matches(arg0: BlockData): boolean;
	merge(arg0: BlockData): BlockData;
	setFace(arg0: BlockFace, arg1: boolean): void;
	setWaterlogged(arg0: boolean): void;
}

export default class GlassPane {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.GlassPane');
	}
	public static $isInstance(obj: any): obj is GlassPane {
		return obj instanceof GlassPane.$javaClass;
	}

}

