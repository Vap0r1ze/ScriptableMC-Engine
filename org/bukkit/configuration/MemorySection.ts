declare var Java: any;
import Boolean from '../../../java/lang/Boolean.js'
import Byte from '../../../java/lang/Byte.js'
import Character from '../../../java/lang/Character.js'
import Class from '../../../java/lang/Class.js'
import Color from '../../../org/bukkit/Color.js'
import Configuration from './Configuration.js'
import ConfigurationSection from './ConfigurationSection.js'
import ConfigurationSerializable from './serialization/ConfigurationSerializable.js'
import Double from '../../../java/lang/Double.js'
import Float from '../../../java/lang/Float.js'
import Integer from '../../../java/lang/Integer.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import List from '../../../java/util/List.js'
import Location from '../../../org/bukkit/Location.js'
import Long from '../../../java/lang/Long.js'
import Map from '../../../java/util/Map.js'
import Object from '../../../java/lang/Object.js'
import OfflinePlayer from '../../../org/bukkit/OfflinePlayer.js'
import Set from '../../../java/util/Set.js'
import Short from '../../../java/lang/Short.js'
import String from '../../../java/lang/String.js'
import Vector from '../../../org/bukkit/util/Vector.js'

export default interface MemorySection extends Object, ConfigurationSection {
	addDefault(path: string, value: Object): void;
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
	set(path: string, value: Object): void;
}

export default class MemorySection {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.configuration.MemorySection');
	}
	public static $isInstance(obj: any): obj is MemorySection {
		return obj instanceof MemorySection.$javaClass;
	}

	public static createPath(section: ConfigurationSection, key: string): string;
	public static createPath(section: ConfigurationSection, key: string, relativeTo: ConfigurationSection): string;
	public static createPath(...args: any[]): any {
		return MemorySection.$javaClass.createPath(...args);
	}

}

