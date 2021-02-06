declare var Java: any;
import Attribute from '../../../../org/bukkit/attribute/Attribute.js'
import AttributeModifier from '../../../../org/bukkit/attribute/AttributeModifier.js'
import CustomItemTagContainer from './tags/CustomItemTagContainer.js'
import DyeColor from '../../../../org/bukkit/DyeColor.js'
import Enchantment from '../../../../org/bukkit/enchantments/Enchantment.js'
import EquipmentSlot from '../../../../org/bukkit/inventory/EquipmentSlot.js'
import ItemFlag from '../../../../org/bukkit/inventory/ItemFlag.js'
import ItemMeta from './ItemMeta.js'
import Multimap from '../../../../com/google/common/collect/Multimap.js'
import PersistentDataContainer from '../../../../org/bukkit/persistence/PersistentDataContainer.js'
import TropicalFish$Pattern from '../../../../org/bukkit/entity/TropicalFish$Pattern.js'

export default interface TropicalFishBucketMeta extends ItemMeta {
	addAttributeModifier(arg0: Attribute, arg1: AttributeModifier): boolean;
	addEnchant(arg0: Enchantment, arg1: number, arg2: boolean): boolean;
	addItemFlags(arg0: Array<ItemFlag>): void;
	clone(): any;
	clone(): ItemMeta;
	clone(): TropicalFishBucketMeta;
	getAttributeModifiers(): Multimap;
	getAttributeModifiers(arg0: EquipmentSlot): Multimap;
	getAttributeModifiers(arg0: Attribute): Array<AttributeModifier>;
	getBodyColor(): DyeColor;
	getCustomModelData(): number;
	getCustomTagContainer(): CustomItemTagContainer;
	getDisplayName(): string;
	getEnchantLevel(arg0: Enchantment): number;
	getEnchants(): any;
	getItemFlags(): any;
	getLocalizedName(): string;
	getLore(): Array<string>;
	getPattern(): TropicalFish$Pattern;
	getPatternColor(): DyeColor;
	getPersistentDataContainer(): PersistentDataContainer;
	hasAttributeModifiers(): boolean;
	hasConflictingEnchant(arg0: Enchantment): boolean;
	hasCustomModelData(): boolean;
	hasDisplayName(): boolean;
	hasEnchant(arg0: Enchantment): boolean;
	hasEnchants(): boolean;
	hasItemFlag(arg0: ItemFlag): boolean;
	hasLocalizedName(): boolean;
	hasLore(): boolean;
	hasVariant(): boolean;
	isUnbreakable(): boolean;
	removeAttributeModifier(arg0: EquipmentSlot): boolean;
	removeAttributeModifier(arg0: Attribute): boolean;
	removeAttributeModifier(arg0: Attribute, arg1: AttributeModifier): boolean;
	removeEnchant(arg0: Enchantment): boolean;
	removeItemFlags(arg0: Array<ItemFlag>): void;
	serialize(): any;
	setAttributeModifiers(arg0: Multimap): void;
	setBodyColor(arg0: DyeColor): void;
	setCustomModelData(arg0: any): void;
	setDisplayName(arg0: string): void;
	setLocalizedName(arg0: string): void;
	setLore(arg0: Array<any>): void;
	setPattern(arg0: TropicalFish$Pattern): void;
	setPatternColor(arg0: DyeColor): void;
	setUnbreakable(arg0: boolean): void;
	setVersion(arg0: number): void;
}

export default class TropicalFishBucketMeta {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.meta.TropicalFishBucketMeta');
	}

}

