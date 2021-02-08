declare var Java: any;
import BlockData from './BlockData.js'
import Material from '../../../../org/bukkit/Material.js'
import Object from '../../../../java/lang/Object.js'
import SoundGroup from '../../../../org/bukkit/SoundGroup.js'
import String from '../../../../java/lang/String.js'

export default interface AnaloguePowerable extends BlockData {
	clone(): BlockData;
	clone(): Object;
	getAsString(): string;
	getAsString(arg0: boolean): string;
	getMaterial(): Material;
	getMaximumPower(): number;
	getPower(): number;
	getSoundGroup(): SoundGroup;
	matches(arg0: BlockData): boolean;
	merge(arg0: BlockData): BlockData;
	setPower(arg0: number): void;
}

export default class AnaloguePowerable {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.AnaloguePowerable');
	}
	public static $isInstance(obj: any): obj is AnaloguePowerable {
		return obj instanceof AnaloguePowerable.$javaClass;
	}

}

