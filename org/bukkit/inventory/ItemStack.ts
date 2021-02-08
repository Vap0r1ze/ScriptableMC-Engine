declare var Java: any;
import Byte from '../../../java/lang/Byte.js'
import Class from '../../../java/lang/Class.js'
import Cloneable from '../../../java/lang/Cloneable.js'
import ConfigurationSerializable from '../../../org/bukkit/configuration/serialization/ConfigurationSerializable.js'
import Enchantment from '../../../org/bukkit/enchantments/Enchantment.js'
import ItemMeta from './meta/ItemMeta.js'
import Map from '../../../java/util/Map.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from '../../../org/bukkit/material/MaterialData.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'

export default interface ItemStack extends Object, Cloneable, ConfigurationSerializable {
	addEnchantment(ench: Enchantment, level: number): void;
	addEnchantments(enchantments: Map): void;
	addUnsafeEnchantment(ench: Enchantment, level: number): void;
	addUnsafeEnchantments(enchantments: Map): void;
	clone(): Object;
	clone(): ItemStack;
	containsEnchantment(ench: Enchantment): boolean;
	getAmount(): number;
	getData(): MaterialData;
	getDurability(): number;
	getEnchantmentLevel(ench: Enchantment): number;
	getEnchantments(): Map;
	getItemMeta(): ItemMeta;
	getMaxStackSize(): number;
	getType(): Material;
	hasItemMeta(): boolean;
	isSimilar(stack: ItemStack): boolean;
	removeEnchantment(ench: Enchantment): number;
	serialize(): Map;
	setAmount(amount: number): void;
	setData(data: MaterialData): void;
	setDurability(durability: number): void;
	setItemMeta(itemMeta: ItemMeta): boolean;
	setType(type: Material): void;
}

export default class ItemStack {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.ItemStack');
	}
	public static $isInstance(obj: any): obj is ItemStack {
		return obj instanceof ItemStack.$javaClass;
	}

	constructor(type: Material);
	constructor(stack: ItemStack);
	constructor(type: Material, amount: number);
	constructor(type: Material, amount: number, damage: number);
	constructor(type: Material, amount: number, damage: number, data: number);
	constructor(...args: any[]) {
		return new ItemStack.$javaClass(...args);
	}

	public static deserialize(args: Map): ItemStack;
	public static deserialize(...args: any[]): any {
		return ItemStack.$javaClass.deserialize(...args);
	}

}

