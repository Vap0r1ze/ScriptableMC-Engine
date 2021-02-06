declare var Java: any;

export default interface DelegateDeserialization {
	annotationType(): any;
	value(): any;
}

export default class DelegateDeserialization {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.configuration.serialization.DelegateDeserialization');
	}
	public static $isInstance(obj: any): obj is DelegateDeserialization {
		return obj instanceof DelegateDeserialization.$javaClass;
	}

}

