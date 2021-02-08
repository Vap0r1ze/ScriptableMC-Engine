declare var Java: any;
import Bisected$Half from './Bisected$Half.js'
import BlockData from './BlockData.js'
import Material from '../../../../org/bukkit/Material.js'
import SoundGroup from '../../../../org/bukkit/SoundGroup.js'

export default interface Bisected extends BlockData {
	clone(): BlockData;
	clone(): any;
	getAsString(): string;
	getAsString(arg0: boolean): string;
	getHalf(): Bisected$Half;
	getMaterial(): Material;
	getSoundGroup(): SoundGroup;
	matches(arg0: BlockData): boolean;
	merge(arg0: BlockData): BlockData;
	setHalf(arg0: Bisected$Half): void;
}

export default class Bisected {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.Bisected');
	}
	public static $isInstance(obj: any): obj is Bisected {
		return obj instanceof Bisected.$javaClass;
	}

}

