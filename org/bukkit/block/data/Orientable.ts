declare var Java: any;
import Axis from '../../../../org/bukkit/Axis.js'
import BlockData from './BlockData.js'
import Material from '../../../../org/bukkit/Material.js'
import Object from '../../../../java/lang/Object.js'
import Set from '../../../../java/util/Set.js'
import SoundGroup from '../../../../org/bukkit/SoundGroup.js'
import String from '../../../../java/lang/String.js'

export default interface Orientable extends BlockData {
	clone(): BlockData;
	clone(): Object;
	getAsString(): string;
	getAsString(arg0: boolean): string;
	getAxes(): Set;
	getAxis(): Axis;
	getMaterial(): Material;
	getSoundGroup(): SoundGroup;
	matches(arg0: BlockData): boolean;
	merge(arg0: BlockData): BlockData;
	setAxis(arg0: Axis): void;
}

export default class Orientable {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.Orientable');
	}
	public static $isInstance(obj: any): obj is Orientable {
		return obj instanceof Orientable.$javaClass;
	}

}

