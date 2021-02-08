declare var Java: any;
import BlockData from './BlockData.js'
import BlockFace from '../../../../org/bukkit/block/BlockFace.js'
import Material from '../../../../org/bukkit/Material.js'
import SoundGroup from '../../../../org/bukkit/SoundGroup.js'

export default interface Directional extends BlockData {
	clone(): BlockData;
	clone(): any;
	getAsString(): string;
	getAsString(arg0: boolean): string;
	getFaces(): any;
	getFacing(): BlockFace;
	getMaterial(): Material;
	getSoundGroup(): SoundGroup;
	matches(arg0: BlockData): boolean;
	merge(arg0: BlockData): BlockData;
	setFacing(arg0: BlockFace): void;
}

export default class Directional {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.Directional');
	}
	public static $isInstance(obj: any): obj is Directional {
		return obj instanceof Directional.$javaClass;
	}

}

