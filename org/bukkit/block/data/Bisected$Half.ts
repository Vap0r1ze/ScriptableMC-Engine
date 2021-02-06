declare var Java: any;

export default interface Bisected$Half {
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class Bisected$Half {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.Bisected$Half');
	}
	public static $isInstance(obj: any): obj is Bisected$Half {
		return obj instanceof Bisected$Half.$javaClass;
	}

	public static get BOTTOM(): Bisected$Half {
		return this.$javaClass.BOTTOM;
	}
	public static get TOP(): Bisected$Half {
		return this.$javaClass.TOP;
	}
}

