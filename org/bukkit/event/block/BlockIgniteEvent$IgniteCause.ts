declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import Enum from '../../../../java/lang/Enum.js'
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'

export default interface BlockIgniteEvent$IgniteCause extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
}

export default class BlockIgniteEvent$IgniteCause {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.BlockIgniteEvent$IgniteCause');
	}
	public static $isInstance(obj: any): obj is BlockIgniteEvent$IgniteCause {
		return obj instanceof BlockIgniteEvent$IgniteCause.$javaClass;
	}

	public static get ARROW(): BlockIgniteEvent$IgniteCause {
		return this.$javaClass.ARROW;
	}
	public static get ENDER_CRYSTAL(): BlockIgniteEvent$IgniteCause {
		return this.$javaClass.ENDER_CRYSTAL;
	}
	public static get EXPLOSION(): BlockIgniteEvent$IgniteCause {
		return this.$javaClass.EXPLOSION;
	}
	public static get FIREBALL(): BlockIgniteEvent$IgniteCause {
		return this.$javaClass.FIREBALL;
	}
	public static get FLINT_AND_STEEL(): BlockIgniteEvent$IgniteCause {
		return this.$javaClass.FLINT_AND_STEEL;
	}
	public static get LAVA(): BlockIgniteEvent$IgniteCause {
		return this.$javaClass.LAVA;
	}
	public static get LIGHTNING(): BlockIgniteEvent$IgniteCause {
		return this.$javaClass.LIGHTNING;
	}
	public static get SPREAD(): BlockIgniteEvent$IgniteCause {
		return this.$javaClass.SPREAD;
	}
}

