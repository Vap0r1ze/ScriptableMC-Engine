declare var Java: any;

export default interface VillagerCareerChangeEvent$ChangeReason {
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
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

