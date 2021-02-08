declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import Enum from '../../../../java/lang/Enum.js'
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'

export default interface CauldronLevelChangeEvent$ChangeReason extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
}

export default class CauldronLevelChangeEvent$ChangeReason {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.CauldronLevelChangeEvent$ChangeReason');
	}
	public static $isInstance(obj: any): obj is CauldronLevelChangeEvent$ChangeReason {
		return obj instanceof CauldronLevelChangeEvent$ChangeReason.$javaClass;
	}

	public static get ARMOR_WASH(): CauldronLevelChangeEvent$ChangeReason {
		return this.$javaClass.ARMOR_WASH;
	}
	public static get BANNER_WASH(): CauldronLevelChangeEvent$ChangeReason {
		return this.$javaClass.BANNER_WASH;
	}
	public static get BOTTLE_EMPTY(): CauldronLevelChangeEvent$ChangeReason {
		return this.$javaClass.BOTTLE_EMPTY;
	}
	public static get BOTTLE_FILL(): CauldronLevelChangeEvent$ChangeReason {
		return this.$javaClass.BOTTLE_FILL;
	}
	public static get BUCKET_EMPTY(): CauldronLevelChangeEvent$ChangeReason {
		return this.$javaClass.BUCKET_EMPTY;
	}
	public static get BUCKET_FILL(): CauldronLevelChangeEvent$ChangeReason {
		return this.$javaClass.BUCKET_FILL;
	}
	public static get EVAPORATE(): CauldronLevelChangeEvent$ChangeReason {
		return this.$javaClass.EVAPORATE;
	}
	public static get EXTINGUISH(): CauldronLevelChangeEvent$ChangeReason {
		return this.$javaClass.EXTINGUISH;
	}
	public static get UNKNOWN(): CauldronLevelChangeEvent$ChangeReason {
		return this.$javaClass.UNKNOWN;
	}
}

