declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import Enum from '../../../../java/lang/Enum.js'
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'

export default interface EntityDamageEvent$DamageModifier extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
}

export default class EntityDamageEvent$DamageModifier {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityDamageEvent$DamageModifier');
	}
	public static $isInstance(obj: any): obj is EntityDamageEvent$DamageModifier {
		return obj instanceof EntityDamageEvent$DamageModifier.$javaClass;
	}

	public static get ABSORPTION(): EntityDamageEvent$DamageModifier {
		return this.$javaClass.ABSORPTION;
	}
	public static get ARMOR(): EntityDamageEvent$DamageModifier {
		return this.$javaClass.ARMOR;
	}
	public static get BASE(): EntityDamageEvent$DamageModifier {
		return this.$javaClass.BASE;
	}
	public static get BLOCKING(): EntityDamageEvent$DamageModifier {
		return this.$javaClass.BLOCKING;
	}
	public static get HARD_HAT(): EntityDamageEvent$DamageModifier {
		return this.$javaClass.HARD_HAT;
	}
	public static get MAGIC(): EntityDamageEvent$DamageModifier {
		return this.$javaClass.MAGIC;
	}
	public static get RESISTANCE(): EntityDamageEvent$DamageModifier {
		return this.$javaClass.RESISTANCE;
	}
}

