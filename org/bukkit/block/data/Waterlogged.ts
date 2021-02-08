declare var Java: any;
import BlockData from './BlockData.js'
import Material from '../../../../org/bukkit/Material.js'
import Object from '../../../../java/lang/Object.js'
import SoundGroup from '../../../../org/bukkit/SoundGroup.js'
import String from '../../../../java/lang/String.js'

export default interface Waterlogged extends BlockData {
	clone(): BlockData;
	clone(): Object;
	getAsString(): string;
	getAsString(arg0: boolean): string;
	getMaterial(): Material;
	getSoundGroup(): SoundGroup;
	isWaterlogged(): boolean;
	matches(arg0: BlockData): boolean;
	merge(arg0: BlockData): BlockData;
	setWaterlogged(arg0: boolean): void;
}

export default class Waterlogged {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.Waterlogged');
	}
	public static $isInstance(obj: any): obj is Waterlogged {
		return obj instanceof Waterlogged.$javaClass;
	}

}

