declare var Java: any;

export default interface NetherWartsState {
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class NetherWartsState {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.NetherWartsState');
	}
	public static $isInstance(obj: any): obj is NetherWartsState {
		return obj instanceof NetherWartsState.$javaClass;
	}

	public static get RIPE(): NetherWartsState {
		return this.$javaClass.RIPE;
	}
	public static get SEEDED(): NetherWartsState {
		return this.$javaClass.SEEDED;
	}
	public static get STAGE_ONE(): NetherWartsState {
		return this.$javaClass.STAGE_ONE;
	}
	public static get STAGE_TWO(): NetherWartsState {
		return this.$javaClass.STAGE_TWO;
	}
}

