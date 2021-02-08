declare var Java: any;

export default interface BarStyle {
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class BarStyle {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.boss.BarStyle');
	}
	public static $isInstance(obj: any): obj is BarStyle {
		return obj instanceof BarStyle.$javaClass;
	}

	public static get SEGMENTED_10(): BarStyle {
		return this.$javaClass.SEGMENTED_10;
	}
	public static get SEGMENTED_12(): BarStyle {
		return this.$javaClass.SEGMENTED_12;
	}
	public static get SEGMENTED_20(): BarStyle {
		return this.$javaClass.SEGMENTED_20;
	}
	public static get SEGMENTED_6(): BarStyle {
		return this.$javaClass.SEGMENTED_6;
	}
	public static get SOLID(): BarStyle {
		return this.$javaClass.SOLID;
	}
}

