declare var Java: any;
import BlockData from '../../../../../org/bukkit/block/data/BlockData.js'
import BlockFace from '../../../../../org/bukkit/block/BlockFace.js'
import Directional from '../../../../../org/bukkit/block/data/Directional.js'
import Material from '../../../../../org/bukkit/Material.js'
import Powerable from '../../../../../org/bukkit/block/data/Powerable.js'
import SoundGroup from '../../../../../org/bukkit/SoundGroup.js'

export default interface Observer extends Directional, Powerable {
	clone(): BlockData;
	clone(): any;
	getAsString(): string;
	getAsString(arg0: boolean): string;
	getFaces(): any;
	getFacing(): BlockFace;
	getMaterial(): Material;
	getSoundGroup(): SoundGroup;
	isPowered(): boolean;
	matches(arg0: BlockData): boolean;
	merge(arg0: BlockData): BlockData;
	setFacing(arg0: BlockFace): void;
	setPowered(arg0: boolean): void;
}

export default class Observer {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.Observer');
	}
	public static $isInstance(obj: any): obj is Observer {
		return obj instanceof Observer.$javaClass;
	}

}

