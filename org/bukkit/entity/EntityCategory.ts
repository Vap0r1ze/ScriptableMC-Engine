declare var Java: any;
import Class from '../../../java/lang/Class.js'
import Enum from '../../../java/lang/Enum.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'

export default interface EntityCategory extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
}

export default class EntityCategory {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.entity.EntityCategory');
	}
	public static $isInstance(obj: any): obj is EntityCategory {
		return obj instanceof EntityCategory.$javaClass;
	}

	public static get ARTHROPOD(): EntityCategory {
		return this.$javaClass.ARTHROPOD;
	}
	public static get ILLAGER(): EntityCategory {
		return this.$javaClass.ILLAGER;
	}
	public static get NONE(): EntityCategory {
		return this.$javaClass.NONE;
	}
	public static get UNDEAD(): EntityCategory {
		return this.$javaClass.UNDEAD;
	}
	public static get WATER(): EntityCategory {
		return this.$javaClass.WATER;
	}
}

