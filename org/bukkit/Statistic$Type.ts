declare var Java: any;
import Class from '../../java/lang/Class.js'
import Enum from '../../java/lang/Enum.js'
import Object from '../../java/lang/Object.js'
import String from '../../java/lang/String.js'

export default interface Statistic$Type extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
}

export default class Statistic$Type {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.Statistic$Type');
	}
	public static $isInstance(obj: any): obj is Statistic$Type {
		return obj instanceof Statistic$Type.$javaClass;
	}

	public static get BLOCK(): Statistic$Type {
		return this.$javaClass.BLOCK;
	}
	public static get ENTITY(): Statistic$Type {
		return this.$javaClass.ENTITY;
	}
	public static get ITEM(): Statistic$Type {
		return this.$javaClass.ITEM;
	}
	public static get UNTYPED(): Statistic$Type {
		return this.$javaClass.UNTYPED;
	}
}

