declare var Java: any;
import Attribute from '../../../../org/bukkit/attribute/Attribute.js'
import AttributeModifier from '../../../../org/bukkit/attribute/AttributeModifier.js'
import Collection from '../../../../java/util/Collection.js'
import CustomItemTagContainer from './tags/CustomItemTagContainer.js'
import Enchantment from '../../../../org/bukkit/enchantments/Enchantment.js'
import EquipmentSlot from '../../../../org/bukkit/inventory/EquipmentSlot.js'
import Integer from '../../../../java/lang/Integer.js'
import ItemFlag from '../../../../org/bukkit/inventory/ItemFlag.js'
import ItemMeta from './ItemMeta.js'
import List from '../../../../java/util/List.js'
import Map from '../../../../java/util/Map.js'
import Multimap from '../../../../com/google/common/collect/Multimap.js'
import Object from '../../../../java/lang/Object.js'
import PersistentDataContainer from '../../../../org/bukkit/persistence/PersistentDataContainer.js'
import PotionEffect from '../../../../org/bukkit/potion/PotionEffect.js'
import PotionEffectType from '../../../../org/bukkit/potion/PotionEffectType.js'
import Set from '../../../../java/util/Set.js'
import String from '../../../../java/lang/String.js'

export default interface SuspiciousStewMeta extends ItemMeta {
	addAttributeModifier(arg0: Attribute, arg1: AttributeModifier): boolean;
	addCustomEffect(arg0: PotionEffect, arg1: boolean): boolean;
	addEnchant(arg0: Enchantment, arg1: number, arg2: boolean): boolean;
	addItemFlags(arg0: Array<ItemFlag>): void;
	clearCustomEffects(): boolean;
	clone(): Object;
	clone(): ItemMeta;
	clone(): SuspiciousStewMeta;
	getAttributeModifiers(): Multimap;
	getAttributeModifiers(arg0: Attribute): Array<AttributeModifier>;
	getAttributeModifiers(arg0: EquipmentSlot): Multimap;
	getCustomEffects(): Array<PotionEffect>;
	getCustomModelData(): number;
	getCustomTagContainer(): CustomItemTagContainer;
	getDisplayName(): string;
	getEnchantLevel(arg0: Enchantment): number;
	getEnchants(): Map;
	getItemFlags(): Set;
	getLocalizedName(): string;
	getLore(): Array<string>;
	getPersistentDataContainer(): PersistentDataContainer;
	hasAttributeModifiers(): boolean;
	hasConflictingEnchant(arg0: Enchantment): boolean;
	hasCustomEffect(arg0: PotionEffectType): boolean;
	hasCustomEffects(): boolean;
	hasCustomModelData(): boolean;
	hasDisplayName(): boolean;
	hasEnchant(arg0: Enchantment): boolean;
	hasEnchants(): boolean;
	hasItemFlag(arg0: ItemFlag): boolean;
	hasLocalizedName(): boolean;
	hasLore(): boolean;
	isUnbreakable(): boolean;
	removeAttributeModifier(arg0: EquipmentSlot): boolean;
	removeAttributeModifier(arg0: Attribute): boolean;
	removeAttributeModifier(arg0: Attribute, arg1: AttributeModifier): boolean;
	removeCustomEffect(arg0: PotionEffectType): boolean;
	removeEnchant(arg0: Enchantment): boolean;
	removeItemFlags(arg0: Array<ItemFlag>): void;
	serialize(): Map;
	setAttributeModifiers(arg0: Multimap): void;
	setCustomModelData(arg0: Integer): void;
	setDisplayName(arg0: string): void;
	setLocalizedName(arg0: string): void;
	setLore(arg0: Array<any>): void;
	setUnbreakable(arg0: boolean): void;
	setVersion(arg0: number): void;
}

export default class SuspiciousStewMeta {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.meta.SuspiciousStewMeta');
	}
	public static $isInstance(obj: any): obj is SuspiciousStewMeta {
		return obj instanceof SuspiciousStewMeta.$javaClass;
	}

}

