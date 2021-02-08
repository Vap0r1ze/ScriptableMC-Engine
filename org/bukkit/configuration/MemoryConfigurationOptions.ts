declare var Java: any;
import Class from '../../../java/lang/Class.js'
import Configuration from './Configuration.js'
import ConfigurationOptions from './ConfigurationOptions.js'
import MemoryConfiguration from './MemoryConfiguration.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'

export default interface MemoryConfigurationOptions extends ConfigurationOptions {
	configuration(): Configuration;
	configuration(): MemoryConfiguration;
	copyDefaults(): boolean;
	copyDefaults(value: boolean): ConfigurationOptions;
	copyDefaults(value: boolean): MemoryConfigurationOptions;
	pathSeparator(): string;
	pathSeparator(value: string): ConfigurationOptions;
	pathSeparator(value: string): MemoryConfigurationOptions;
}

export default class MemoryConfigurationOptions {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.configuration.MemoryConfigurationOptions');
	}
	public static $isInstance(obj: any): obj is MemoryConfigurationOptions {
		return obj instanceof MemoryConfigurationOptions.$javaClass;
	}

}

