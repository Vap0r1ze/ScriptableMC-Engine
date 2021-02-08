declare var Java: any;
import Boolean from '../../../../java/lang/Boolean.js'
import Byte from '../../../../java/lang/Byte.js'
import Character from '../../../../java/lang/Character.js'
import Class from '../../../../java/lang/Class.js'
import Color from '../../../../org/bukkit/Color.js'
import Configuration from '../../../../org/bukkit/configuration/Configuration.js'
import ConfigurationOptions from '../../../../org/bukkit/configuration/ConfigurationOptions.js'
import ConfigurationSection from '../../../../org/bukkit/configuration/ConfigurationSection.js'
import ConfigurationSerializable from '../../../../org/bukkit/configuration/serialization/ConfigurationSerializable.js'
import Double from '../../../../java/lang/Double.js'
import File from '../../../../java/io/File.js'
import FileConfiguration from './FileConfiguration.js'
import FileConfigurationOptions from './FileConfigurationOptions.js'
import Float from '../../../../java/lang/Float.js'
import Integer from '../../../../java/lang/Integer.js'
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js'
import List from '../../../../java/util/List.js'
import Location from '../../../../org/bukkit/Location.js'
import Long from '../../../../java/lang/Long.js'
import Map from '../../../../java/util/Map.js'
import MemoryConfigurationOptions from '../../../../org/bukkit/configuration/MemoryConfigurationOptions.js'
import Object from '../../../../java/lang/Object.js'
import OfflinePlayer from '../../../../org/bukkit/OfflinePlayer.js'
import Reader from '../../../../java/io/Reader.js'
import Set from '../../../../java/util/Set.js'
import Short from '../../../../java/lang/Short.js'
import String from '../../../../java/lang/String.js'
import Vector from '../../../../org/bukkit/util/Vector.js'
import YamlConfigurationOptions from './YamlConfigurationOptions.js'

export default interface YamlConfiguration extends FileConfiguration {
	addDefault(path: string, value: Object): void;
	addDefaults(defaults: Map): void;
	addDefaults(defaults: Configuration): void;
	contains(path: string): boolean;
	contains(path: string, ignoreDefault: boolean): boolean;
	createSection(path: string): ConfigurationSection;
	createSection(path: string, map: Map): ConfigurationSection;
	get(path: string): Object;
	get(path: string, def: Object): Object;
	getBoolean(path: string): boolean;
	getBoolean(path: string, def: boolean): boolean;
	getBooleanList(path: string): Array<boolean>;
	getByteList(path: string): Array<number>;
	getCharacterList(path: string): Array<Character>;
	getColor(path: string): Color;
	getColor(path: string, def: Color): Color;
	getConfigurationSection(path: string): ConfigurationSection;
	getCurrentPath(): string;
	getDefaultSection(): ConfigurationSection;
	getDefaults(): Configuration;
	getDouble(path: string): number;
	getDouble(path: string, def: number): number;
	getDoubleList(path: string): Array<number>;
	getFloatList(path: string): Array<number>;
	getInt(path: string): number;
	getInt(path: string, def: number): number;
	getIntegerList(path: string): Array<Integer>;
	getItemStack(path: string): ItemStack;
	getItemStack(path: string, def: ItemStack): ItemStack;
	getKeys(deep: boolean): Set;
	getList(path: string): Array<any>;
	getList(path: string, def: Array<any>): Array<any>;
	getLocation(path: string): Location;
	getLocation(path: string, def: Location): Location;
	getLong(path: string): number;
	getLong(path: string, def: number): number;
	getLongList(path: string): Array<number>;
	getMapList(path: string): Array<any>;
	getName(): string;
	getObject(path: string, clazz: Class): Object;
	getObject(path: string, clazz: Class, def: Object): Object;
	getOfflinePlayer(path: string): OfflinePlayer;
	getOfflinePlayer(path: string, def: OfflinePlayer): OfflinePlayer;
	getParent(): ConfigurationSection;
	getRoot(): Configuration;
	getSerializable(path: string, clazz: Class): ConfigurationSerializable;
	getSerializable(path: string, clazz: Class, def: ConfigurationSerializable): ConfigurationSerializable;
	getShortList(path: string): Array<number>;
	getString(path: string): string;
	getString(path: string, def: string): string;
	getStringList(path: string): Array<string>;
	getValues(deep: boolean): Map;
	getVector(path: string): Vector;
	getVector(path: string, def: Vector): Vector;
	isBoolean(path: string): boolean;
	isColor(path: string): boolean;
	isConfigurationSection(path: string): boolean;
	isDouble(path: string): boolean;
	isInt(path: string): boolean;
	isItemStack(path: string): boolean;
	isList(path: string): boolean;
	isLocation(path: string): boolean;
	isLong(path: string): boolean;
	isOfflinePlayer(path: string): boolean;
	isSet(path: string): boolean;
	isString(path: string): boolean;
	isVector(path: string): boolean;
	load(reader: Reader): void;
	load(file: string): void;
	load(file: File): void;
	loadFromString(contents: string): void;
	options(): MemoryConfigurationOptions;
	options(): ConfigurationOptions;
	options(): FileConfigurationOptions;
	options(): YamlConfigurationOptions;
	save(file: File): void;
	save(file: string): void;
	saveToString(): string;
	set(path: string, value: Object): void;
	setDefaults(defaults: Configuration): void;
}

export default class YamlConfiguration {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.configuration.file.YamlConfiguration');
	}
	public static $isInstance(obj: any): obj is YamlConfiguration {
		return obj instanceof YamlConfiguration.$javaClass;
	}

	constructor();
	constructor(...args: any[]) {
		return new YamlConfiguration.$javaClass(...args);
	}

	public static createPath(section: ConfigurationSection, key: string): string;
	public static createPath(section: ConfigurationSection, key: string, relativeTo: ConfigurationSection): string;
	public static createPath(...args: any[]): any {
		return YamlConfiguration.$javaClass.createPath(...args);
	}

	public static loadConfiguration(file: File): YamlConfiguration;
	public static loadConfiguration(reader: Reader): YamlConfiguration;
	public static loadConfiguration(...args: any[]): any {
		return YamlConfiguration.$javaClass.loadConfiguration(...args);
	}

}

