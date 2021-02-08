declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import Enum from '../../../../java/lang/Enum.js'
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'

export default interface SlotIterator$Type extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
}

export default class SlotIterator$Type {
	public static get $javaClass(): any {
		return Java.type('fr.minuskube.inv.content.SlotIterator$Type');
	}
	public static $isInstance(obj: any): obj is SlotIterator$Type {
		return obj instanceof SlotIterator$Type.$javaClass;
	}

	public static get HORIZONTAL(): SlotIterator$Type {
		return this.$javaClass.HORIZONTAL;
	}
	public static get VERTICAL(): SlotIterator$Type {
		return this.$javaClass.VERTICAL;
	}
}

