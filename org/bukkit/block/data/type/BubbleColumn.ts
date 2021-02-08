declare var Java: any;
import BlockData from '../../../../../org/bukkit/block/data/BlockData.js'
import Material from '../../../../../org/bukkit/Material.js'
import Object from '../../../../../java/lang/Object.js'
import SoundGroup from '../../../../../org/bukkit/SoundGroup.js'
import String from '../../../../../java/lang/String.js'

export default interface BubbleColumn extends BlockData {
	clone(): BlockData;
	clone(): Object;
	getAsString(): string;
	getAsString(arg0: boolean): string;
	getMaterial(): Material;
	getSoundGroup(): SoundGroup;
	isDrag(): boolean;
	matches(arg0: BlockData): boolean;
	merge(arg0: BlockData): BlockData;
	setDrag(arg0: boolean): void;
}

export default class BubbleColumn {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.BubbleColumn');
	}
	public static $isInstance(obj: any): obj is BubbleColumn {
		return obj instanceof BubbleColumn.$javaClass;
	}

}

