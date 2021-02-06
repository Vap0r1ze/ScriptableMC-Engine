declare var Java: any;
import BlockData from './BlockData.js'
import Material from '../../../../org/bukkit/Material.js'
import SoundGroup from '../../../../org/bukkit/SoundGroup.js'

export default interface Ageable extends BlockData {
	clone(): BlockData;
	clone(): any;
	getAge(): number;
	getAsString(): string;
	getAsString(arg0: boolean): string;
	getMaterial(): Material;
	getMaximumAge(): number;
	getSoundGroup(): SoundGroup;
	matches(arg0: BlockData): boolean;
	merge(arg0: BlockData): BlockData;
	setAge(arg0: number): void;
}

export default class Ageable {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.Ageable');
	}

}
