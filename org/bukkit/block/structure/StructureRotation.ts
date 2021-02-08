declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import Enum from '../../../../java/lang/Enum.js'
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'

export default interface StructureRotation extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
}

export default class StructureRotation {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.structure.StructureRotation');
	}
	public static $isInstance(obj: any): obj is StructureRotation {
		return obj instanceof StructureRotation.$javaClass;
	}

	public static get CLOCKWISE_180(): StructureRotation {
		return this.$javaClass.CLOCKWISE_180;
	}
	public static get CLOCKWISE_90(): StructureRotation {
		return this.$javaClass.CLOCKWISE_90;
	}
	public static get COUNTERCLOCKWISE_90(): StructureRotation {
		return this.$javaClass.COUNTERCLOCKWISE_90;
	}
	public static get NONE(): StructureRotation {
		return this.$javaClass.NONE;
	}
}

