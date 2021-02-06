declare var Java: any;

export default interface Comparator$Mode {
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class Comparator$Mode {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.Comparator$Mode');
	}
	public static $isInstance(obj: any): obj is Comparator$Mode {
		return obj instanceof Comparator$Mode.$javaClass;
	}

	public static get COMPARE(): Comparator$Mode {
		return this.$javaClass.COMPARE;
	}
	public static get SUBTRACT(): Comparator$Mode {
		return this.$javaClass.SUBTRACT;
	}
}

