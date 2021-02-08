declare var Java: any;
import BlockData from './BlockData.js'
import BlockFace from '../../../../org/bukkit/block/BlockFace.js'
import Material from '../../../../org/bukkit/Material.js'
import Object from '../../../../java/lang/Object.js'
import SoundGroup from '../../../../org/bukkit/SoundGroup.js'
import String from '../../../../java/lang/String.js'

export default interface Rotatable extends BlockData {
	clone(): BlockData;
	clone(): Object;
	getAsString(): string;
	getAsString(arg0: boolean): string;
	getMaterial(): Material;
	getRotation(): BlockFace;
	getSoundGroup(): SoundGroup;
	matches(arg0: BlockData): boolean;
	merge(arg0: BlockData): BlockData;
	setRotation(arg0: BlockFace): void;
}

export default class Rotatable {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.Rotatable');
	}
	public static $isInstance(obj: any): obj is Rotatable {
		return obj instanceof Rotatable.$javaClass;
	}

}

