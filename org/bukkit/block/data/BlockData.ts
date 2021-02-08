declare var Java: any;
import Cloneable from '../../../../java/lang/Cloneable.js'
import Material from '../../../../org/bukkit/Material.js'
import Object from '../../../../java/lang/Object.js'
import SoundGroup from '../../../../org/bukkit/SoundGroup.js'
import String from '../../../../java/lang/String.js'

export default interface BlockData extends Cloneable {
	clone(): BlockData;
	clone(): Object;
	getAsString(): string;
	getAsString(arg0: boolean): string;
	getMaterial(): Material;
	getSoundGroup(): SoundGroup;
	matches(arg0: BlockData): boolean;
	merge(arg0: BlockData): BlockData;
}

export default class BlockData {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.BlockData');
	}
	public static $isInstance(obj: any): obj is BlockData {
		return obj instanceof BlockData.$javaClass;
	}

}

