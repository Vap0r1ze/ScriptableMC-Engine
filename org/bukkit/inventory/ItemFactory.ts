declare var Java: any;
import Color from '../../../org/bukkit/Color.js'
import ItemMeta from './meta/ItemMeta.js'
import ItemStack from './ItemStack.js'
import Material from '../../../org/bukkit/Material.js'

export default interface ItemFactory {
	asMetaFor(arg0: ItemMeta, arg1: Material): ItemMeta;
	asMetaFor(arg0: ItemMeta, arg1: ItemStack): ItemMeta;
	getDefaultLeatherColor(): Color;
	getItemMeta(arg0: Material): ItemMeta;
	isApplicable(arg0: ItemMeta, arg1: Material): boolean;
	isApplicable(arg0: ItemMeta, arg1: ItemStack): boolean;
	updateMaterial(arg0: ItemMeta, arg1: Material): Material;
}

export default class ItemFactory {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.ItemFactory');
	}
	public static $isInstance(obj: any): obj is ItemFactory {
		return obj instanceof ItemFactory.$javaClass;
	}

}

