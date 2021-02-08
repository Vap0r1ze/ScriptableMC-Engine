declare var Java: any;
import Class from '../../../java/lang/Class.js'
import Enum from '../../../java/lang/Enum.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'

export default interface Cat$Type extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
}

export default class Cat$Type {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.entity.Cat$Type');
	}
	public static $isInstance(obj: any): obj is Cat$Type {
		return obj instanceof Cat$Type.$javaClass;
	}

	public static get ALL_BLACK(): Cat$Type {
		return this.$javaClass.ALL_BLACK;
	}
	public static get BLACK(): Cat$Type {
		return this.$javaClass.BLACK;
	}
	public static get BRITISH_SHORTHAIR(): Cat$Type {
		return this.$javaClass.BRITISH_SHORTHAIR;
	}
	public static get CALICO(): Cat$Type {
		return this.$javaClass.CALICO;
	}
	public static get JELLIE(): Cat$Type {
		return this.$javaClass.JELLIE;
	}
	public static get PERSIAN(): Cat$Type {
		return this.$javaClass.PERSIAN;
	}
	public static get RAGDOLL(): Cat$Type {
		return this.$javaClass.RAGDOLL;
	}
	public static get RED(): Cat$Type {
		return this.$javaClass.RED;
	}
	public static get SIAMESE(): Cat$Type {
		return this.$javaClass.SIAMESE;
	}
	public static get TABBY(): Cat$Type {
		return this.$javaClass.TABBY;
	}
	public static get WHITE(): Cat$Type {
		return this.$javaClass.WHITE;
	}
}

