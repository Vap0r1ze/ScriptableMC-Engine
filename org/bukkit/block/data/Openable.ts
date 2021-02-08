declare var Java: any;
import BlockData from './BlockData.js'
import Material from '../../../../org/bukkit/Material.js'
import Object from '../../../../java/lang/Object.js'
import SoundGroup from '../../../../org/bukkit/SoundGroup.js'
import String from '../../../../java/lang/String.js'

export default interface Openable extends BlockData {
	clone(): BlockData;
	clone(): Object;
	getAsString(): string;
	getAsString(arg0: boolean): string;
	getMaterial(): Material;
	getSoundGroup(): SoundGroup;
	isOpen(): boolean;
	matches(arg0: BlockData): boolean;
	merge(arg0: BlockData): BlockData;
	setOpen(arg0: boolean): void;
}

export default class Openable {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.Openable');
	}
	public static $isInstance(obj: any): obj is Openable {
		return obj instanceof Openable.$javaClass;
	}

}

