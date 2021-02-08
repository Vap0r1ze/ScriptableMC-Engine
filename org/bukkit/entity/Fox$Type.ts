declare var Java: any;

export default interface Fox$Type {
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class Fox$Type {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.entity.Fox$Type');
	}
	public static $isInstance(obj: any): obj is Fox$Type {
		return obj instanceof Fox$Type.$javaClass;
	}

	public static get RED(): Fox$Type {
		return this.$javaClass.RED;
	}
	public static get SNOW(): Fox$Type {
		return this.$javaClass.SNOW;
	}
}

