declare var Java: any;
import BlockData from '../../../../../org/bukkit/block/data/BlockData.js'
import Material from '../../../../../org/bukkit/Material.js'
import Object from '../../../../../java/lang/Object.js'
import Set from '../../../../../java/util/Set.js'
import SoundGroup from '../../../../../org/bukkit/SoundGroup.js'
import String from '../../../../../java/lang/String.js'

export default interface BrewingStand extends BlockData {
	clone(): BlockData;
	clone(): Object;
	getAsString(): string;
	getAsString(arg0: boolean): string;
	getBottles(): Set;
	getMaterial(): Material;
	getMaximumBottles(): number;
	getSoundGroup(): SoundGroup;
	hasBottle(arg0: number): boolean;
	matches(arg0: BlockData): boolean;
	merge(arg0: BlockData): BlockData;
	setBottle(arg0: number, arg1: boolean): void;
}

export default class BrewingStand {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.BrewingStand');
	}
	public static $isInstance(obj: any): obj is BrewingStand {
		return obj instanceof BrewingStand.$javaClass;
	}

}

