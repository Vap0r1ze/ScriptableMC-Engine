declare var Java: any;

export default interface Ocelot$Type {
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	getId(): number;
	name(): string;
	ordinal(): number;
}

export default class Ocelot$Type {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.entity.Ocelot$Type');
	}
	public static $isInstance(obj: any): obj is Ocelot$Type {
		return obj instanceof Ocelot$Type.$javaClass;
	}

	public static get BLACK_CAT(): Ocelot$Type {
		return this.$javaClass.BLACK_CAT;
	}
	public static get RED_CAT(): Ocelot$Type {
		return this.$javaClass.RED_CAT;
	}
	public static get SIAMESE_CAT(): Ocelot$Type {
		return this.$javaClass.SIAMESE_CAT;
	}
	public static get WILD_OCELOT(): Ocelot$Type {
		return this.$javaClass.WILD_OCELOT;
	}
}

