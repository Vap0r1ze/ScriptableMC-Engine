declare var Java: any;

export default interface UndefinedNullability {
	annotationType(): any;
	value(): string;
}

export default class UndefinedNullability {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.UndefinedNullability');
	}
	public static $isInstance(obj: any): obj is UndefinedNullability {
		return obj instanceof UndefinedNullability.$javaClass;
	}

}

