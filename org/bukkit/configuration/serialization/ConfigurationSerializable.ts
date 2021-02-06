declare var Java: any;

export default interface ConfigurationSerializable {
	serialize(): any;
}

export default class ConfigurationSerializable {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.configuration.serialization.ConfigurationSerializable');
	}
	public static $isInstance(obj: any): obj is ConfigurationSerializable {
		return obj instanceof ConfigurationSerializable.$javaClass;
	}

}

