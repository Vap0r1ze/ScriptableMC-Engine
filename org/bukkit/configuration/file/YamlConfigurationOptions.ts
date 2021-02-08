declare var Java: any;
import Configuration from '../../../../org/bukkit/configuration/Configuration.js'
import ConfigurationOptions from '../../../../org/bukkit/configuration/ConfigurationOptions.js'
import FileConfiguration from './FileConfiguration.js'
import FileConfigurationOptions from './FileConfigurationOptions.js'
import MemoryConfiguration from '../../../../org/bukkit/configuration/MemoryConfiguration.js'
import MemoryConfigurationOptions from '../../../../org/bukkit/configuration/MemoryConfigurationOptions.js'
import YamlConfiguration from './YamlConfiguration.js'

export default interface YamlConfigurationOptions extends FileConfigurationOptions {
	configuration(): FileConfiguration;
	configuration(): Configuration;
	configuration(): YamlConfiguration;
	configuration(): MemoryConfiguration;
	copyDefaults(): boolean;
	copyDefaults(value: boolean): ConfigurationOptions;
	copyDefaults(value: boolean): MemoryConfigurationOptions;
	copyDefaults(value: boolean): FileConfigurationOptions;
	copyDefaults(value: boolean): YamlConfigurationOptions;
	copyHeader(): boolean;
	copyHeader(value: boolean): YamlConfigurationOptions;
	copyHeader(value: boolean): FileConfigurationOptions;
	header(): string;
	header(value: string): FileConfigurationOptions;
	header(value: string): YamlConfigurationOptions;
	indent(): number;
	indent(value: number): YamlConfigurationOptions;
	pathSeparator(): string;
	pathSeparator(value: string): MemoryConfigurationOptions;
	pathSeparator(value: string): ConfigurationOptions;
	pathSeparator(value: string): FileConfigurationOptions;
	pathSeparator(value: string): YamlConfigurationOptions;
}

export default class YamlConfigurationOptions {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.configuration.file.YamlConfigurationOptions');
	}
	public static $isInstance(obj: any): obj is YamlConfigurationOptions {
		return obj instanceof YamlConfigurationOptions.$javaClass;
	}

}

