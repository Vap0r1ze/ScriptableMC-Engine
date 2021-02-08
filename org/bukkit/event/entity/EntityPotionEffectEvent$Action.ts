declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import Enum from '../../../../java/lang/Enum.js'
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'

export default interface EntityPotionEffectEvent$Action extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
}

export default class EntityPotionEffectEvent$Action {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityPotionEffectEvent$Action');
	}
	public static $isInstance(obj: any): obj is EntityPotionEffectEvent$Action {
		return obj instanceof EntityPotionEffectEvent$Action.$javaClass;
	}

	public static get ADDED(): EntityPotionEffectEvent$Action {
		return this.$javaClass.ADDED;
	}
	public static get CHANGED(): EntityPotionEffectEvent$Action {
		return this.$javaClass.CHANGED;
	}
	public static get CLEARED(): EntityPotionEffectEvent$Action {
		return this.$javaClass.CLEARED;
	}
	public static get REMOVED(): EntityPotionEffectEvent$Action {
		return this.$javaClass.REMOVED;
	}
}

