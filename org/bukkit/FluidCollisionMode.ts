declare var Java: any;

export default interface FluidCollisionMode {
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class FluidCollisionMode {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.FluidCollisionMode');
	}
	public static $isInstance(obj: any): obj is FluidCollisionMode {
		return obj instanceof FluidCollisionMode.$javaClass;
	}

	public static get ALWAYS(): FluidCollisionMode {
		return this.$javaClass.ALWAYS;
	}
	public static get NEVER(): FluidCollisionMode {
		return this.$javaClass.NEVER;
	}
	public static get SOURCE_ONLY(): FluidCollisionMode {
		return this.$javaClass.SOURCE_ONLY;
	}
}

