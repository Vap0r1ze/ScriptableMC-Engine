declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import Configuration from '../../../../org/bukkit/configuration/Configuration.js'
import ConfigurationOptions from '../../../../org/bukkit/configuration/ConfigurationOptions.js'
import FileConfiguration from './FileConfiguration.js'
import FileConfigurationOptions from './FileConfigurationOptions.js'
import MemoryConfiguration from '../../../../org/bukkit/configuration/MemoryConfiguration.js'
import MemoryConfigurationOptions from '../../../../org/bukkit/configuration/MemoryConfigurationOptions.js'
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'
import YamlConfiguration from './YamlConfiguration.js'

export default interface YamlConfigurationOptions extends FileConfigurationOptions {
	configuration(): FileConfiguration;
	configuration(): Configuration;
	configuration(): MemoryConfiguration;
	configuration(): YamlConfiguration;
	copyDefaults(): boolean;
	copyDefaults(value: boolean): MemoryConfigurationOptions;
	copyDefaults(value: boolean): FileConfigurationOptions;
	copyDefaults(value: boolean): ConfigurationOptions;
	copyDefaults(value: boolean): YamlConfigurationOptions;
	copyHeader(): boolean;
	copyHeader(value: boolean): FileConfigurationOptions;
	copyHeader(value: boolean): YamlConfigurationOptions;
	header(): string;
	header(value: string): YamlConfigurationOptions;
	header(value: string): FileConfigurationOptions;
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

