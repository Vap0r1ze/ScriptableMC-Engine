declare var Java: any;

export default interface Nameable {
	getCustomName(): string;
	setCustomName(arg0: string): void;
}

export default class Nameable {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.Nameable');
	}
	public static $isInstance(obj: any): obj is Nameable {
		return obj instanceof Nameable.$javaClass;
	}

}

