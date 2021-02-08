declare var Java: any;
import Class from '../../../java/lang/Class.js'
import Configuration from './Configuration.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'

export default interface ConfigurationOptions extends Object {
	configuration(): Configuration;
	copyDefaults(): boolean;
	copyDefaults(value: boolean): ConfigurationOptions;
	pathSeparator(): string;
	pathSeparator(value: string): ConfigurationOptions;
}

export default class ConfigurationOptions {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.configuration.ConfigurationOptions');
	}
	public static $isInstance(obj: any): obj is ConfigurationOptions {
		return obj instanceof ConfigurationOptions.$javaClass;
	}

}

