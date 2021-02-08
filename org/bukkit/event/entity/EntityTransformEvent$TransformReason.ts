declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import Enum from '../../../../java/lang/Enum.js'
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'

export default interface EntityTransformEvent$TransformReason extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
}

export default class EntityTransformEvent$TransformReason {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityTransformEvent$TransformReason');
	}
	public static $isInstance(obj: any): obj is EntityTransformEvent$TransformReason {
		return obj instanceof EntityTransformEvent$TransformReason.$javaClass;
	}

	public static get CURED(): EntityTransformEvent$TransformReason {
		return this.$javaClass.CURED;
	}
	public static get DROWNED(): EntityTransformEvent$TransformReason {
		return this.$javaClass.DROWNED;
	}
	public static get INFECTION(): EntityTransformEvent$TransformReason {
		return this.$javaClass.INFECTION;
	}
	public static get LIGHTNING(): EntityTransformEvent$TransformReason {
		return this.$javaClass.LIGHTNING;
	}
	public static get SHEARED(): EntityTransformEvent$TransformReason {
		return this.$javaClass.SHEARED;
	}
	public static get SPLIT(): EntityTransformEvent$TransformReason {
		return this.$javaClass.SPLIT;
	}
	public static get UNKNOWN(): EntityTransformEvent$TransformReason {
		return this.$javaClass.UNKNOWN;
	}
}

