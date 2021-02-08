declare var Java: any;
import AnaloguePowerable from '../../../../../org/bukkit/block/data/AnaloguePowerable.js'
import BlockData from '../../../../../org/bukkit/block/data/BlockData.js'
import Material from '../../../../../org/bukkit/Material.js'
import Object from '../../../../../java/lang/Object.js'
import SoundGroup from '../../../../../org/bukkit/SoundGroup.js'
import String from '../../../../../java/lang/String.js'

export default interface DaylightDetector extends AnaloguePowerable {
	clone(): BlockData;
	clone(): Object;
	getAsString(): string;
	getAsString(arg0: boolean): string;
	getMaterial(): Material;
	getMaximumPower(): number;
	getPower(): number;
	getSoundGroup(): SoundGroup;
	isInverted(): boolean;
	matches(arg0: BlockData): boolean;
	merge(arg0: BlockData): BlockData;
	setInverted(arg0: boolean): void;
	setPower(arg0: number): void;
}

export default class DaylightDetector {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.DaylightDetector');
	}
	public static $isInstance(obj: any): obj is DaylightDetector {
		return obj instanceof DaylightDetector.$javaClass;
	}

}

