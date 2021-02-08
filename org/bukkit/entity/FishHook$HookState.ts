declare var Java: any;
import Class from '../../../java/lang/Class.js'
import Enum from '../../../java/lang/Enum.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'

export default interface FishHook$HookState extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
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

