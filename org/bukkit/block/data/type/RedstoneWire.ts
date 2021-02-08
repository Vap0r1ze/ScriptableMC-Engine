declare var Java: any;
import AnaloguePowerable from '../../../../../org/bukkit/block/data/AnaloguePowerable.js'
import BlockData from '../../../../../org/bukkit/block/data/BlockData.js'
import BlockFace from '../../../../../org/bukkit/block/BlockFace.js'
import Material from '../../../../../org/bukkit/Material.js'
import Object from '../../../../../java/lang/Object.js'
import RedstoneWire$Connection from './RedstoneWire$Connection.js'
import Set from '../../../../../java/util/Set.js'
import SoundGroup from '../../../../../org/bukkit/SoundGroup.js'
import String from '../../../../../java/lang/String.js'

export default interface RedstoneWire extends AnaloguePowerable {
	clone(): BlockData;
	clone(): Object;
	getAllowedFaces(): Set;
	getAsString(): string;
	getAsString(arg0: boolean): string;
	getFace(arg0: BlockFace): RedstoneWire$Connection;
	getMaterial(): Material;
	getMaximumPower(): number;
	getPower(): number;
	getSoundGroup(): SoundGroup;
	matches(arg0: BlockData): boolean;
	merge(arg0: BlockData): BlockData;
	setFace(arg0: BlockFace, arg1: RedstoneWire$Connection): void;
	setPower(arg0: number): void;
}

export default class RedstoneWire {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.RedstoneWire');
	}
	public static $isInstance(obj: any): obj is RedstoneWire {
		return obj instanceof RedstoneWire.$javaClass;
	}

}

