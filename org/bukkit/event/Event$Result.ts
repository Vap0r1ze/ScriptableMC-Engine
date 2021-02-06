declare var Java: any;

export default interface Event$Result {
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class Event$Result {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.Event$Result');
	}
	public static $isInstance(obj: any): obj is Event$Result {
		return obj instanceof Event$Result.$javaClass;
	}

	public static get ALLOW(): Event$Result {
		return this.$javaClass.ALLOW;
	}
	public static get DEFAULT(): Event$Result {
		return this.$javaClass.DEFAULT;
	}
	public static get DENY(): Event$Result {
		return this.$javaClass.DENY;
	}
}

