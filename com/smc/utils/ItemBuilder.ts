declare var Java: any;
import Class from '../../../java/lang/Class.js'
import Enchantment from '../../../org/bukkit/enchantments/Enchantment.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'

export default interface ItemBuilder extends Object {
	addEnchant(enchantment: Enchantment): ItemBuilder;
	addEnchant(enchantment: Enchantment, level: number): ItemBuilder;
	addEnchant(enchantment: Enchantment, level: number, ignoreLevelRestriction: boolean): ItemBuilder;
	build(): ItemStack;
	getDisplayName(): string;
	getLore(): Array<string>;
	isUnbreakable(isUnbreakable: boolean): ItemBuilder;
	removeEnchantment(enchantment: Enchantment): ItemBuilder;
	setDisplayName(displayName: string): ItemBuilder;
	setLore(lore: Array<string>): ItemBuilder;
}

export default class ItemBuilder {
	public static get $javaClass(): any {
		return Java.type('com.smc.utils.ItemBuilder');
	}
	public static $isInstance(obj: any): obj is ItemBuilder {
		return obj instanceof ItemBuilder.$javaClass;
	}

	constructor(itemStack: ItemStack);
	constructor(material: Material);
	constructor(...args: any[]) {
		return new ItemBuilder.$javaClass(...args);
	}

	public static addEnchant$default(arg0: ItemBuilder, arg1: Enchantment, arg2: number, arg3: boolean, arg4: number, arg5: Object): ItemBuilder;
	public static addEnchant$default(...args: any[]): any {
		return ItemBuilder.$javaClass.addEnchant$default(...args);
	}

}

