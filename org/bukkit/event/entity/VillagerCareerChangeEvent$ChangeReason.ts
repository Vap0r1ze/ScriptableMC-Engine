declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import Enum from '../../../../java/lang/Enum.js'
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'

export default interface VillagerCareerChangeEvent$ChangeReason extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
}

export default class VillagerCareerChangeEvent$ChangeReason {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.VillagerCareerChangeEvent$ChangeReason');
	}
	public static $isInstance(obj: any): obj is VillagerCareerChangeEvent$ChangeReason {
		return obj instanceof VillagerCareerChangeEvent$ChangeReason.$javaClass;
	}

	public static get EMPLOYED(): VillagerCareerChangeEvent$ChangeReason {
		return this.$javaClass.EMPLOYED;
	}
	public static get LOSING_JOB(): VillagerCareerChangeEvent$ChangeReason {
		return this.$javaClass.LOSING_JOB;
	}
}

