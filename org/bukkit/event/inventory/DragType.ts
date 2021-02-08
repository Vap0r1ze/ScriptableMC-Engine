declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import Enum from '../../../../java/lang/Enum.js'
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'

export default interface DragType extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
}

export default class DragType {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.inventory.DragType');
	}
	public static $isInstance(obj: any): obj is DragType {
		return obj instanceof DragType.$javaClass;
	}

	public static get EVEN(): DragType {
		return this.$javaClass.EVEN;
	}
	public static get SINGLE(): DragType {
		return this.$javaClass.SINGLE;
	}
}

