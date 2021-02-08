declare var Java: any;
import Class from '../../java/lang/Class.js'
import Enum from '../../java/lang/Enum.js'
import Object from '../../java/lang/Object.js'
import String from '../../java/lang/String.js'

export default interface SkullType extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
}

export default class SkullType {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.SkullType');
	}
	public static $isInstance(obj: any): obj is SkullType {
		return obj instanceof SkullType.$javaClass;
	}

	public static get CREEPER(): SkullType {
		return this.$javaClass.CREEPER;
	}
	public static get DRAGON(): SkullType {
		return this.$javaClass.DRAGON;
	}
	public static get PLAYER(): SkullType {
		return this.$javaClass.PLAYER;
	}
	public static get SKELETON(): SkullType {
		return this.$javaClass.SKELETON;
	}
	public static get WITHER(): SkullType {
		return this.$javaClass.WITHER;
	}
	public static get ZOMBIE(): SkullType {
		return this.$javaClass.ZOMBIE;
	}
}

