declare var Java: any;
import BlockData from '../../../../../org/bukkit/block/data/BlockData.js'
import Material from '../../../../../org/bukkit/Material.js'
import SoundGroup from '../../../../../org/bukkit/SoundGroup.js'

export default interface TurtleEgg extends BlockData {
	clone(): BlockData;
	clone(): any;
	getAsString(): string;
	getAsString(arg0: boolean): string;
	getEggs(): number;
	getHatch(): number;
	getMaterial(): Material;
	getMaximumEggs(): number;
	getMaximumHatch(): number;
	getMinimumEggs(): number;
	getSoundGroup(): SoundGroup;
	matches(arg0: BlockData): boolean;
	merge(arg0: BlockData): BlockData;
	setEggs(arg0: number): void;
	setHatch(arg0: number): void;
}

export default class TurtleEgg {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.TurtleEgg');
	}
	public static $isInstance(obj: any): obj is TurtleEgg {
		return obj instanceof TurtleEgg.$javaClass;
	}

}

