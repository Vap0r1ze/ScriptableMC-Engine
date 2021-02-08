declare var Java: any;
import Boolean from '../../../java/lang/Boolean.js'
import Byte from '../../../java/lang/Byte.js'
import Class from '../../../java/lang/Class.js'
import Double from '../../../java/lang/Double.js'
import Float from '../../../java/lang/Float.js'
import Integer from '../../../java/lang/Integer.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Long from '../../../java/lang/Long.js'
import NBTCompoundList from './NBTCompoundList.js'
import NBTList from './NBTList.js'
import NBTType from './NBTType.js'
import Object from '../../../java/lang/Object.js'
import Set from '../../../java/util/Set.js'
import Short from '../../../java/lang/Short.js'
import String from '../../../java/lang/String.js'

export default interface NBTCompound extends Object {
	addCompound(_name: string): NBTCompound;
	asNBTString(): string;
	getBoolean(key: string): boolean;
	getByte(key: string): number;
	getByteArray(key: string): Array<number>;
	getCompound(): Object;
	getCompound(_name: string): NBTCompound;
	getCompoundList(_name: string): NBTCompoundList;
	getDouble(key: string): number;
	getFloat(key: string): number;
	getIntArray(key: string): Array<number>;
	getInteger(key: string): Integer;
	getIntegerList(_name: string): NBTList;
	getItemStack(key: string): ItemStack;
	getKeys(): Set;
	getLong(key: string): number;
	getName(): string;
	getObject(key: string, type: Class): Object;
	getParent(): NBTCompound;
	getShort(key: string): number;
	getString(key: string): string;
	getStringList(_name: string): NBTList;
	getType(_name: string): NBTType;
	hasKey(key: string): boolean;
	mergeCompound(comp: NBTCompound): void;
	removeKey(key: string): void;
	setBoolean(key: string, value: boolean): void;
	setByte(key: string, value: number): void;
	setByteArray(key: string, value: Array<number>): void;
	setDouble(key: string, value: number): void;
	setFloat(key: string, value: number): void;
	setIntArray(key: string, value: Array<number>): void;
	setInteger(key: string, value: Integer): void;
	setItemStack(key: string, item: ItemStack): void;
	setLong(key: string, value: number): void;
	setObject(key: string, value: Object): void;
	setShort(key: string, value: number): void;
	setString(key: string, value: string): void;
}

export default class NBTCompound {
	public static get $javaClass(): any {
		return Java.type('com.smc.nbtapi.NBTCompound');
	}
	public static $isInstance(obj: any): obj is NBTCompound {
		return obj instanceof NBTCompound.$javaClass;
	}

}

