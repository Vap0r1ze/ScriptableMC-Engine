declare var Java: any;
import Attribute from '../../../../org/bukkit/attribute/Attribute.js'
import AttributeModifier from '../../../../org/bukkit/attribute/AttributeModifier.js'
import Collection from '../../../../java/util/Collection.js'
import Color from '../../../../org/bukkit/Color.js'
import CustomItemTagContainer from './tags/CustomItemTagContainer.js'
import Enchantment from '../../../../org/bukkit/enchantments/Enchantment.js'
import EquipmentSlot from '../../../../org/bukkit/inventory/EquipmentSlot.js'
import Integer from '../../../../java/lang/Integer.js'
import ItemFlag from '../../../../org/bukkit/inventory/ItemFlag.js'
import ItemMeta from './ItemMeta.js'
import List from '../../../../java/util/List.js'
import Map from '../../../../java/util/Map.js'
import MapView from '../../../../org/bukkit/map/MapView.js'
import Multimap from '../../../../com/google/common/collect/Multimap.js'
import Object from '../../../../java/lang/Object.js'
import PersistentDataContainer from '../../../../org/bukkit/persistence/PersistentDataContainer.js'
import Set from '../../../../java/util/Set.js'
import String from '../../../../java/lang/String.js'

export default interface MapMeta extends ItemMeta {
	addAttributeModifier(arg0: Attribute, arg1: AttributeModifier): boolean;
	addEnchant(arg0: Enchantment, arg1: number, arg2: boolean): boolean;
	addItemFlags(arg0: Array<ItemFlag>): void;
	clone(): Object;
	clone(): ItemMeta;
	clone(): MapMeta;
	getAttributeModifiers(): Multimap;
	getAttributeModifiers(arg0: Attribute): Array<AttributeModifier>;
	getAttributeModifiers(arg0: EquipmentSlot): Multimap;
	getColor(): Color;
	getCustomModelData(): number;
	getCustomTagContainer(): CustomItemTagContainer;
	getDisplayName(): string;
	getEnchantLevel(arg0: Enchantment): number;
	getEnchants(): Map;
	getItemFlags(): Set;
	getLocalizedName(): string;
	getLocationName(): string;
	getLore(): Array<string>;
	getMapId(): number;
	getMapView(): MapView;
	getPersistentDataContainer(): PersistentDataContainer;
	hasAttributeModifiers(): boolean;
	hasColor(): boolean;
	hasConflictingEnchant(arg0: Enchantment): boolean;
	hasCustomModelData(): boolean;
	hasDisplayName(): boolean;
	hasEnchant(arg0: Enchantment): boolean;
	hasEnchants(): boolean;
	hasItemFlag(arg0: ItemFlag): boolean;
	hasLocalizedName(): boolean;
	hasLocationName(): boolean;
	hasLore(): boolean;
	hasMapId(): boolean;
	hasMapView(): boolean;
	isScaling(): boolean;
	isUnbreakable(): boolean;
	removeAttributeModifier(arg0: EquipmentSlot): boolean;
	removeAttributeModifier(arg0: Attribute): boolean;
	removeAttributeModifier(arg0: Attribute, arg1: AttributeModifier): boolean;
	removeEnchant(arg0: Enchantment): boolean;
	removeItemFlags(arg0: Array<ItemFlag>): void;
	serialize(): Map;
	setAttributeModifiers(arg0: Multimap): void;
	setColor(arg0: Color): void;
	setCustomModelData(arg0: Integer): void;
	setDisplayName(arg0: string): void;
	setLocalizedName(arg0: string): void;
	setLocationName(arg0: string): void;
	setLore(arg0: Array<any>): void;
	setMapId(arg0: number): void;
	setMapView(arg0: MapView): void;
	setScaling(arg0: boolean): void;
	setUnbreakable(arg0: boolean): void;
	setVersion(arg0: number): void;
}

export default class MapMeta {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.meta.MapMeta');
	}
	public static $isInstance(obj: any): obj is MapMeta {
		return obj instanceof MapMeta.$javaClass;
	}

}

