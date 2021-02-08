declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import ConfigurationSerializable from './ConfigurationSerializable.js'
import Map from '../../../../java/util/Map.js'
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'

export default interface ConfigurationSerialization extends Object {
	deserialize(args: Map): ConfigurationSerializable;
}

export default class ConfigurationSerialization {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.configuration.serialization.ConfigurationSerialization');
	}
	public static $isInstance(obj: any): obj is ConfigurationSerialization {
		return obj instanceof ConfigurationSerialization.$javaClass;
	}

	public static get SERIALIZED_TYPE_KEY(): string {
		return ConfigurationSerialization.$javaClass.SERIALIZED_TYPE_KEY;
	}

	public static deserializeObject(args: Map): ConfigurationSerializable;
	public static deserializeObject(args: Map, clazz: Class): ConfigurationSerializable;
	public static deserializeObject(...args: any[]): any {
		return ConfigurationSerialization.$javaClass.deserializeObject(...args);
	}

	public static getAlias(clazz: Class): string;
	public static getAlias(...args: any[]): any {
		return ConfigurationSerialization.$javaClass.getAlias(...args);
	}

	public static getClassByAlias(alias: string): Class;
	public static getClassByAlias(...args: any[]): any {
		return ConfigurationSerialization.$javaClass.getClassByAlias(...args);
	}

	public static registerClass(clazz: Class): void;
	public static registerClass(clazz: Class, alias: string): void;
	public static registerClass(...args: any[]): any {
		return ConfigurationSerialization.$javaClass.registerClass(...args);
	}

	public static unregisterClass(clazz: Class): void;
	public static unregisterClass(alias: string): void;
	public static unregisterClass(...args: any[]): any {
		return ConfigurationSerialization.$javaClass.unregisterClass(...args);
	}

}

