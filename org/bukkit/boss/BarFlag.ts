declare var Java: any;
import Class from '../../../java/lang/Class.js'
import Enum from '../../../java/lang/Enum.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'

export default interface BarFlag extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
}

export default class BarFlag {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.boss.BarFlag');
	}
	public static $isInstance(obj: any): obj is BarFlag {
		return obj instanceof BarFlag.$javaClass;
	}

	public static get CREATE_FOG(): BarFlag {
		return this.$javaClass.CREATE_FOG;
	}
	public static get DARKEN_SKY(): BarFlag {
		return this.$javaClass.DARKEN_SKY;
	}
	public static get PLAY_BOSS_MUSIC(): BarFlag {
		return this.$javaClass.PLAY_BOSS_MUSIC;
	}
}

