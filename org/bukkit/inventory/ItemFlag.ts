declare var Java: any;
import Class from '../../../java/lang/Class.js'
import Enum from '../../../java/lang/Enum.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'

export default interface ItemFlag extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
}

export default class ItemFlag {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.ItemFlag');
	}
	public static $isInstance(obj: any): obj is ItemFlag {
		return obj instanceof ItemFlag.$javaClass;
	}

	public static get HIDE_ATTRIBUTES(): ItemFlag {
		return this.$javaClass.HIDE_ATTRIBUTES;
	}
	public static get HIDE_DESTROYS(): ItemFlag {
		return this.$javaClass.HIDE_DESTROYS;
	}
	public static get HIDE_DYE(): ItemFlag {
		return this.$javaClass.HIDE_DYE;
	}
	public static get HIDE_ENCHANTS(): ItemFlag {
		return this.$javaClass.HIDE_ENCHANTS;
	}
	public static get HIDE_PLACED_ON(): ItemFlag {
		return this.$javaClass.HIDE_PLACED_ON;
	}
	public static get HIDE_POTION_EFFECTS(): ItemFlag {
		return this.$javaClass.HIDE_POTION_EFFECTS;
	}
	public static get HIDE_UNBREAKABLE(): ItemFlag {
		return this.$javaClass.HIDE_UNBREAKABLE;
	}
}

