declare var Java: any;
import Map from '../../../../java/util/Map.js'

export default interface ConfigurationSerializable {
	serialize(): Map;
}

export default class ConfigurationSerializable {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.configuration.serialization.ConfigurationSerializable');
	}
	public static $isInstance(obj: any): obj is ConfigurationSerializable {
		return obj instanceof ConfigurationSerializable.$javaClass;
	}

}

