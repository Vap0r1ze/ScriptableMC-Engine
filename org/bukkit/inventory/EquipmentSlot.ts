declare var Java: any;
import Class from '../../../java/lang/Class.js'
import Enum from '../../../java/lang/Enum.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'

export default interface EquipmentSlot extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
}

export default class EquipmentSlot {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.EquipmentSlot');
	}
	public static $isInstance(obj: any): obj is EquipmentSlot {
		return obj instanceof EquipmentSlot.$javaClass;
	}

	public static get CHEST(): EquipmentSlot {
		return this.$javaClass.CHEST;
	}
	public static get FEET(): EquipmentSlot {
		return this.$javaClass.FEET;
	}
	public static get HAND(): EquipmentSlot {
		return this.$javaClass.HAND;
	}
	public static get HEAD(): EquipmentSlot {
		return this.$javaClass.HEAD;
	}
	public static get LEGS(): EquipmentSlot {
		return this.$javaClass.LEGS;
	}
	public static get OFF_HAND(): EquipmentSlot {
		return this.$javaClass.OFF_HAND;
	}
}

