declare var Java: any;
import BlockData from '../../../../../org/bukkit/block/data/BlockData.js'
import Material from '../../../../../org/bukkit/Material.js'
import Object from '../../../../../java/lang/Object.js'
import SoundGroup from '../../../../../org/bukkit/SoundGroup.js'
import String from '../../../../../java/lang/String.js'

export default interface Snow extends BlockData {
	clone(): BlockData;
	clone(): Object;
	getAsString(): string;
	getAsString(arg0: boolean): string;
	getLayers(): number;
	getMaterial(): Material;
	getMaximumLayers(): number;
	getMinimumLayers(): number;
	getSoundGroup(): SoundGroup;
	matches(arg0: BlockData): boolean;
	merge(arg0: BlockData): BlockData;
	setLayers(arg0: number): void;
}

export default class Snow {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.Snow');
	}
	public static $isInstance(obj: any): obj is Snow {
		return obj instanceof Snow.$javaClass;
	}

}

