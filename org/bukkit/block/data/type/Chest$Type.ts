declare var Java: any;

export default interface Chest$Type {
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class Chest$Type {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.Chest$Type');
	}
	public static $isInstance(obj: any): obj is Chest$Type {
		return obj instanceof Chest$Type.$javaClass;
	}

	public static get LEFT(): Chest$Type {
		return this.$javaClass.LEFT;
	}
	public static get RIGHT(): Chest$Type {
		return this.$javaClass.RIGHT;
	}
	public static get SINGLE(): Chest$Type {
		return this.$javaClass.SINGLE;
	}
}

