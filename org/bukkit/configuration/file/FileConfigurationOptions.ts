declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import Configuration from '../../../../org/bukkit/configuration/Configuration.js'
import ConfigurationOptions from '../../../../org/bukkit/configuration/ConfigurationOptions.js'
import FileConfiguration from './FileConfiguration.js'
import MemoryConfiguration from '../../../../org/bukkit/configuration/MemoryConfiguration.js'
import MemoryConfigurationOptions from '../../../../org/bukkit/configuration/MemoryConfigurationOptions.js'
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'

export default interface FileConfigurationOptions extends MemoryConfigurationOptions {
	configuration(): MemoryConfiguration;
	configuration(): Configuration;
	configuration(): FileConfiguration;
	copyDefaults(): boolean;
	copyDefaults(value: boolean): MemoryConfigurationOptions;
	copyDefaults(value: boolean): ConfigurationOptions;
	copyDefaults(value: boolean): FileConfigurationOptions;
	copyHeader(): boolean;
	copyHeader(value: boolean): FileConfigurationOptions;
	header(): string;
	header(value: string): FileConfigurationOptions;
	pathSeparator(): string;
	pathSeparator(value: string): ConfigurationOptions;
	pathSeparator(value: string): MemoryConfigurationOptions;
	pathSeparator(value: string): FileConfigurationOptions;
}

export default class FileConfigurationOptions {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.configuration.file.FileConfigurationOptions');
	}
	public static $isInstance(obj: any): obj is FileConfigurationOptions {
		return obj instanceof FileConfigurationOptions.$javaClass;
	}

}

