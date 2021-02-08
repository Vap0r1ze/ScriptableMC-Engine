declare var Java: any;
import Class from '../../java/lang/Class.js'
import Enum from '../../java/lang/Enum.js'
import Object from '../../java/lang/Object.js'
import String from '../../java/lang/String.js'

export default interface FireworkEffect$Type extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
}

export default class FireworkEffect$Type {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.FireworkEffect$Type');
	}
	public static $isInstance(obj: any): obj is FireworkEffect$Type {
		return obj instanceof FireworkEffect$Type.$javaClass;
	}

	public static get BALL(): FireworkEffect$Type {
		return this.$javaClass.BALL;
	}
	public static get BALL_LARGE(): FireworkEffect$Type {
		return this.$javaClass.BALL_LARGE;
	}
	public static get BURST(): FireworkEffect$Type {
		return this.$javaClass.BURST;
	}
	public static get CREEPER(): FireworkEffect$Type {
		return this.$javaClass.CREEPER;
	}
	public static get STAR(): FireworkEffect$Type {
		return this.$javaClass.STAR;
	}
}

