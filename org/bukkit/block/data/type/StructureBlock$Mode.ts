declare var Java: any;
import Class from '../../../../../java/lang/Class.js'
import Enum from '../../../../../java/lang/Enum.js'
import Object from '../../../../../java/lang/Object.js'
import String from '../../../../../java/lang/String.js'

export default interface StructureBlock$Mode extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
}

export default class StructureBlock$Mode {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.StructureBlock$Mode');
	}
	public static $isInstance(obj: any): obj is StructureBlock$Mode {
		return obj instanceof StructureBlock$Mode.$javaClass;
	}

	public static get CORNER(): StructureBlock$Mode {
		return this.$javaClass.CORNER;
	}
	public static get DATA(): StructureBlock$Mode {
		return this.$javaClass.DATA;
	}
	public static get LOAD(): StructureBlock$Mode {
		return this.$javaClass.LOAD;
	}
	public static get SAVE(): StructureBlock$Mode {
		return this.$javaClass.SAVE;
	}
}

