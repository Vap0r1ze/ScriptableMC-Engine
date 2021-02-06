declare var Java: any;

export default interface MushroomCow$Variant {
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class MushroomCow$Variant {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.entity.MushroomCow$Variant');
	}
	public static $isInstance(obj: any): obj is MushroomCow$Variant {
		return obj instanceof MushroomCow$Variant.$javaClass;
	}

	public static get BROWN(): MushroomCow$Variant {
		return this.$javaClass.BROWN;
	}
	public static get RED(): MushroomCow$Variant {
		return this.$javaClass.RED;
	}
}

