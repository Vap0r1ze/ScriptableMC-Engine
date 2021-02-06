declare var Java: any;

export default interface FishHook$HookState {
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class FishHook$HookState {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.entity.FishHook$HookState');
	}
	public static $isInstance(obj: any): obj is FishHook$HookState {
		return obj instanceof FishHook$HookState.$javaClass;
	}

	public static get BOBBING(): FishHook$HookState {
		return this.$javaClass.BOBBING;
	}
	public static get HOOKED_ENTITY(): FishHook$HookState {
		return this.$javaClass.HOOKED_ENTITY;
	}
	public static get UNHOOKED(): FishHook$HookState {
		return this.$javaClass.UNHOOKED;
	}
}

