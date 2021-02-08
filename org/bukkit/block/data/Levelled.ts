declare var Java: any;
import BlockData from './BlockData.js'
import Material from '../../../../org/bukkit/Material.js'
import Object from '../../../../java/lang/Object.js'
import SoundGroup from '../../../../org/bukkit/SoundGroup.js'
import String from '../../../../java/lang/String.js'

export default interface Levelled extends BlockData {
	clone(): BlockData;
	clone(): Object;
	getAsString(): string;
	getAsString(arg0: boolean): string;
	getLevel(): number;
	getMaterial(): Material;
	getMaximumLevel(): number;
	getSoundGroup(): SoundGroup;
	matches(arg0: BlockData): boolean;
	merge(arg0: BlockData): BlockData;
	setLevel(arg0: number): void;
}

export default class Levelled {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.Levelled');
	}
	public static $isInstance(obj: any): obj is Levelled {
		return obj instanceof Levelled.$javaClass;
	}

}

