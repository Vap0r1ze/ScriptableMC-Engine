declare var Java: any;
import Configuration from './Configuration.js'
import ConfigurationOptions from './ConfigurationOptions.js'
import MemoryConfiguration from './MemoryConfiguration.js'

export default interface MemoryConfigurationOptions extends ConfigurationOptions {
	configuration(): MemoryConfiguration;
	configuration(): Configuration;
	copyDefaults(): boolean;
	copyDefaults(value: boolean): MemoryConfigurationOptions;
	copyDefaults(value: boolean): ConfigurationOptions;
	pathSeparator(): string;
	pathSeparator(value: string): ConfigurationOptions;
	pathSeparator(value: string): MemoryConfigurationOptions;
}

export default class MemoryConfigurationOptions {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.configuration.MemoryConfigurationOptions');
	}

}

