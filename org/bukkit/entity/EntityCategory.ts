declare var Java: any;

export default interface EntityCategory {
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class EntityCategory {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.entity.EntityCategory');
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

