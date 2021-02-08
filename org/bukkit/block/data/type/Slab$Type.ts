declare var Java: any;
import Class from '../../../../../java/lang/Class.js'
import Enum from '../../../../../java/lang/Enum.js'
import Object from '../../../../../java/lang/Object.js'
import String from '../../../../../java/lang/String.js'

export default interface Slab$Type extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
}

export default class Slab$Type {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.Slab$Type');
	}
	public static $isInstance(obj: any): obj is Slab$Type {
		return obj instanceof Slab$Type.$javaClass;
	}

	public static get BOTTOM(): Slab$Type {
		return this.$javaClass.BOTTOM;
	}
	public static get DOUBLE(): Slab$Type {
		return this.$javaClass.DOUBLE;
	}
	public static get TOP(): Slab$Type {
		return this.$javaClass.TOP;
	}
}

