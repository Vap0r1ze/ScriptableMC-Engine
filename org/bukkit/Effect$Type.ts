declare var Java: any;
import Class from '../../java/lang/Class.js'
import Enum from '../../java/lang/Enum.js'
import Object from '../../java/lang/Object.js'
import String from '../../java/lang/String.js'

export default interface Effect$Type extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
}

export default class Effect$Type {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.Effect$Type');
	}
	public static $isInstance(obj: any): obj is Effect$Type {
		return obj instanceof Effect$Type.$javaClass;
	}

	public static get SOUND(): Effect$Type {
		return this.$javaClass.SOUND;
	}
	public static get VISUAL(): Effect$Type {
		return this.$javaClass.VISUAL;
	}
}

