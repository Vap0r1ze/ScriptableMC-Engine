declare var Java: any;
import BlockData from './BlockData.js'
import Material from '../../../../org/bukkit/Material.js'
import Object from '../../../../java/lang/Object.js'
import SoundGroup from '../../../../org/bukkit/SoundGroup.js'
import String from '../../../../java/lang/String.js'

export default interface Lightable extends BlockData {
	clone(): BlockData;
	clone(): Object;
	getAsString(): string;
	getAsString(arg0: boolean): string;
	getMaterial(): Material;
	getSoundGroup(): SoundGroup;
	isLit(): boolean;
	matches(arg0: BlockData): boolean;
	merge(arg0: BlockData): BlockData;
	setLit(arg0: boolean): void;
}

export default class Lightable {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.Lightable');
	}
	public static $isInstance(obj: any): obj is Lightable {
		return obj instanceof Lightable.$javaClass;
	}

}

