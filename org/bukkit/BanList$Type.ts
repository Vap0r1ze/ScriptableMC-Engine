declare var Java: any;

export default interface BanList$Type {
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class BanList$Type {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.BanList$Type');
	}
	public static $isInstance(obj: any): obj is BanList$Type {
		return obj instanceof BanList$Type.$javaClass;
	}

	public static get IP(): BanList$Type {
		return this.$javaClass.IP;
	}
	public static get NAME(): BanList$Type {
		return this.$javaClass.NAME;
	}
}

