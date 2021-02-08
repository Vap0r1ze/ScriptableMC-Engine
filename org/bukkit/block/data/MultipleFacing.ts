declare var Java: any;
import BlockData from './BlockData.js'
import BlockFace from '../../../../org/bukkit/block/BlockFace.js'
import Material from '../../../../org/bukkit/Material.js'
import Object from '../../../../java/lang/Object.js'
import Set from '../../../../java/util/Set.js'
import SoundGroup from '../../../../org/bukkit/SoundGroup.js'
import String from '../../../../java/lang/String.js'

export default interface MultipleFacing extends BlockData {
	clone(): BlockData;
	clone(): Object;
	getAllowedFaces(): Set;
	getAsString(): string;
	getAsString(arg0: boolean): string;
	getFaces(): Set;
	getMaterial(): Material;
	getSoundGroup(): SoundGroup;
	hasFace(arg0: BlockFace): boolean;
	matches(arg0: BlockData): boolean;
	merge(arg0: BlockData): BlockData;
	setFace(arg0: BlockFace, arg1: boolean): void;
}

export default class MultipleFacing {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.MultipleFacing');
	}
	public static $isInstance(obj: any): obj is MultipleFacing {
		return obj instanceof MultipleFacing.$javaClass;
	}

}

