declare var Java: any;

export default interface Warning {
	annotationType(): any;
	reason(): string;
	value(): boolean;
}

export default class Warning {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.Warning');
	}
	public static $isInstance(obj: any): obj is Warning {
		return obj instanceof Warning.$javaClass;
	}

}

