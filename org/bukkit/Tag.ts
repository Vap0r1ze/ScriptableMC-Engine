declare var Java: any;
import Keyed from './Keyed.js'
import NamespacedKey from './NamespacedKey.js'
import Set from '../../java/util/Set.js'
import String from '../../java/lang/String.js'

export default interface Tag extends Keyed {
	getKey(): NamespacedKey;
	getValues(): Set;
	isTagged(arg0: Keyed): boolean;
}

export default class Tag {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.Tag');
	}
	public static $isInstance(obj: any): obj is Tag {
		return obj instanceof Tag.$javaClass;
	}

	public static get ACACIA_LOGS(): Tag {
		return Tag.$javaClass.ACACIA_LOGS;
	}

	public static get ANVIL(): Tag {
		return Tag.$javaClass.ANVIL;
	}

	public static get BAMBOO_PLANTABLE_ON(): Tag {
		return Tag.$javaClass.BAMBOO_PLANTABLE_ON;
	}

	public static get BANNERS(): Tag {
		return Tag.$javaClass.BANNERS;
	}

	public static get BEACON_BASE_BLOCKS(): Tag {
		return Tag.$javaClass.BEACON_BASE_BLOCKS;
	}

	public static get BEDS(): Tag {
		return Tag.$javaClass.BEDS;
	}

	public static get BEEHIVES(): Tag {
		return Tag.$javaClass.BEEHIVES;
	}

	public static get BEE_GROWABLES(): Tag {
		return Tag.$javaClass.BEE_GROWABLES;
	}

	public static get BIRCH_LOGS(): Tag {
		return Tag.$javaClass.BIRCH_LOGS;
	}

	public static get BUTTONS(): Tag {
		return Tag.$javaClass.BUTTONS;
	}

	public static get CAMPFIRES(): Tag {
		return Tag.$javaClass.CAMPFIRES;
	}

	public static get CARPETS(): Tag {
		return Tag.$javaClass.CARPETS;
	}

	public static get CLIMBABLE(): Tag {
		return Tag.$javaClass.CLIMBABLE;
	}

	public static get CORALS(): Tag {
		return Tag.$javaClass.CORALS;
	}

	public static get CORAL_BLOCKS(): Tag {
		return Tag.$javaClass.CORAL_BLOCKS;
	}

	public static get CORAL_PLANTS(): Tag {
		return Tag.$javaClass.CORAL_PLANTS;
	}

	public static get CRIMSON_STEMS(): Tag {
		return Tag.$javaClass.CRIMSON_STEMS;
	}

	public static get CROPS(): Tag {
		return Tag.$javaClass.CROPS;
	}

	public static get DARK_OAK_LOGS(): Tag {
		return Tag.$javaClass.DARK_OAK_LOGS;
	}

	public static get DOORS(): Tag {
		return Tag.$javaClass.DOORS;
	}

	public static get DRAGON_IMMUNE(): Tag {
		return Tag.$javaClass.DRAGON_IMMUNE;
	}

	public static get ENDERMAN_HOLDABLE(): Tag {
		return Tag.$javaClass.ENDERMAN_HOLDABLE;
	}

	public static get FENCES(): Tag {
		return Tag.$javaClass.FENCES;
	}

	public static get FENCE_GATES(): Tag {
		return Tag.$javaClass.FENCE_GATES;
	}

	public static get FIRE(): Tag {
		return Tag.$javaClass.FIRE;
	}

	public static get FLOWERS(): Tag {
		return Tag.$javaClass.FLOWERS;
	}

	public static get FLOWER_POTS(): Tag {
		return Tag.$javaClass.FLOWER_POTS;
	}

	public static get FLUIDS_LAVA(): Tag {
		return Tag.$javaClass.FLUIDS_LAVA;
	}

	public static get FLUIDS_WATER(): Tag {
		return Tag.$javaClass.FLUIDS_WATER;
	}

	public static get GOLD_ORES(): Tag {
		return Tag.$javaClass.GOLD_ORES;
	}

	public static get GUARDED_BY_PIGLINS(): Tag {
		return Tag.$javaClass.GUARDED_BY_PIGLINS;
	}

	public static get HOGLIN_REPELLENTS(): Tag {
		return Tag.$javaClass.HOGLIN_REPELLENTS;
	}

	public static get ICE(): Tag {
		return Tag.$javaClass.ICE;
	}

	public static get IMPERMEABLE(): Tag {
		return Tag.$javaClass.IMPERMEABLE;
	}

	public static get INFINIBURN_END(): Tag {
		return Tag.$javaClass.INFINIBURN_END;
	}

	public static get INFINIBURN_NETHER(): Tag {
		return Tag.$javaClass.INFINIBURN_NETHER;
	}

	public static get INFINIBURN_OVERWORLD(): Tag {
		return Tag.$javaClass.INFINIBURN_OVERWORLD;
	}

	public static get ITEMS_ARROWS(): Tag {
		return Tag.$javaClass.ITEMS_ARROWS;
	}

	public static get ITEMS_BANNERS(): Tag {
		return Tag.$javaClass.ITEMS_BANNERS;
	}

	public static get ITEMS_BEACON_PAYMENT_ITEMS(): Tag {
		return Tag.$javaClass.ITEMS_BEACON_PAYMENT_ITEMS;
	}

	public static get ITEMS_BOATS(): Tag {
		return Tag.$javaClass.ITEMS_BOATS;
	}

	public static get ITEMS_COALS(): Tag {
		return Tag.$javaClass.ITEMS_COALS;
	}

	public static get ITEMS_CREEPER_DROP_MUSIC_DISCS(): Tag {
		return Tag.$javaClass.ITEMS_CREEPER_DROP_MUSIC_DISCS;
	}

	public static get ITEMS_FISHES(): Tag {
		return Tag.$javaClass.ITEMS_FISHES;
	}

	public static get ITEMS_FURNACE_MATERIALS(): Tag {
		return Tag.$javaClass.ITEMS_FURNACE_MATERIALS;
	}

	public static get ITEMS_LECTERN_BOOKS(): Tag {
		return Tag.$javaClass.ITEMS_LECTERN_BOOKS;
	}

	public static get ITEMS_MUSIC_DISCS(): Tag {
		return Tag.$javaClass.ITEMS_MUSIC_DISCS;
	}

	public static get ITEMS_PIGLIN_LOVED(): Tag {
		return Tag.$javaClass.ITEMS_PIGLIN_LOVED;
	}

	public static get ITEMS_STONE_TOOL_MATERIALS(): Tag {
		return Tag.$javaClass.ITEMS_STONE_TOOL_MATERIALS;
	}

	public static get JUNGLE_LOGS(): Tag {
		return Tag.$javaClass.JUNGLE_LOGS;
	}

	public static get LEAVES(): Tag {
		return Tag.$javaClass.LEAVES;
	}

	public static get LOGS(): Tag {
		return Tag.$javaClass.LOGS;
	}

	public static get LOGS_THAT_BURN(): Tag {
		return Tag.$javaClass.LOGS_THAT_BURN;
	}

	public static get NON_FLAMMABLE_WOOD(): Tag {
		return Tag.$javaClass.NON_FLAMMABLE_WOOD;
	}

	public static get NYLIUM(): Tag {
		return Tag.$javaClass.NYLIUM;
	}

	public static get OAK_LOGS(): Tag {
		return Tag.$javaClass.OAK_LOGS;
	}

	public static get PIGLIN_REPELLENTS(): Tag {
		return Tag.$javaClass.PIGLIN_REPELLENTS;
	}

	public static get PLANKS(): Tag {
		return Tag.$javaClass.PLANKS;
	}

	public static get PORTALS(): Tag {
		return Tag.$javaClass.PORTALS;
	}

	public static get PRESSURE_PLATES(): Tag {
		return Tag.$javaClass.PRESSURE_PLATES;
	}

	public static get PREVENT_MOB_SPAWNING_INSIDE(): Tag {
		return Tag.$javaClass.PREVENT_MOB_SPAWNING_INSIDE;
	}

	public static get RAILS(): Tag {
		return Tag.$javaClass.RAILS;
	}

	public static get REGISTRY_BLOCKS(): string {
		return Tag.$javaClass.REGISTRY_BLOCKS;
	}

	public static get REGISTRY_FLUIDS(): string {
		return Tag.$javaClass.REGISTRY_FLUIDS;
	}

	public static get REGISTRY_ITEMS(): string {
		return Tag.$javaClass.REGISTRY_ITEMS;
	}

	public static get SAND(): Tag {
		return Tag.$javaClass.SAND;
	}

	public static get SAPLINGS(): Tag {
		return Tag.$javaClass.SAPLINGS;
	}

	public static get SHULKER_BOXES(): Tag {
		return Tag.$javaClass.SHULKER_BOXES;
	}

	public static get SIGNS(): Tag {
		return Tag.$javaClass.SIGNS;
	}

	public static get SLABS(): Tag {
		return Tag.$javaClass.SLABS;
	}

	public static get SMALL_FLOWERS(): Tag {
		return Tag.$javaClass.SMALL_FLOWERS;
	}

	public static get SOUL_FIRE_BASE_BLOCKS(): Tag {
		return Tag.$javaClass.SOUL_FIRE_BASE_BLOCKS;
	}

	public static get SOUL_SPEED_BLOCKS(): Tag {
		return Tag.$javaClass.SOUL_SPEED_BLOCKS;
	}

	public static get SPRUCE_LOGS(): Tag {
		return Tag.$javaClass.SPRUCE_LOGS;
	}

	public static get STAIRS(): Tag {
		return Tag.$javaClass.STAIRS;
	}

	public static get STANDING_SIGNS(): Tag {
		return Tag.$javaClass.STANDING_SIGNS;
	}

	public static get STONE_BRICKS(): Tag {
		return Tag.$javaClass.STONE_BRICKS;
	}

	public static get STONE_PRESSURE_PLATES(): Tag {
		return Tag.$javaClass.STONE_PRESSURE_PLATES;
	}

	public static get STRIDER_WARM_BLOCKS(): Tag {
		return Tag.$javaClass.STRIDER_WARM_BLOCKS;
	}

	public static get TALL_FLOWERS(): Tag {
		return Tag.$javaClass.TALL_FLOWERS;
	}

	public static get TRAPDOORS(): Tag {
		return Tag.$javaClass.TRAPDOORS;
	}

	public static get UNDERWATER_BONEMEALS(): Tag {
		return Tag.$javaClass.UNDERWATER_BONEMEALS;
	}

	public static get UNSTABLE_BOTTOM_CENTER(): Tag {
		return Tag.$javaClass.UNSTABLE_BOTTOM_CENTER;
	}

	public static get VALID_SPAWN(): Tag {
		return Tag.$javaClass.VALID_SPAWN;
	}

	public static get WALLS(): Tag {
		return Tag.$javaClass.WALLS;
	}

	public static get WALL_CORALS(): Tag {
		return Tag.$javaClass.WALL_CORALS;
	}

	public static get WALL_POST_OVERRIDE(): Tag {
		return Tag.$javaClass.WALL_POST_OVERRIDE;
	}

	public static get WALL_SIGNS(): Tag {
		return Tag.$javaClass.WALL_SIGNS;
	}

	public static get WARPED_STEMS(): Tag {
		return Tag.$javaClass.WARPED_STEMS;
	}

	public static get WART_BLOCKS(): Tag {
		return Tag.$javaClass.WART_BLOCKS;
	}

	public static get WITHER_IMMUNE(): Tag {
		return Tag.$javaClass.WITHER_IMMUNE;
	}

	public static get WITHER_SUMMON_BASE_BLOCKS(): Tag {
		return Tag.$javaClass.WITHER_SUMMON_BASE_BLOCKS;
	}

	public static get WOODEN_BUTTONS(): Tag {
		return Tag.$javaClass.WOODEN_BUTTONS;
	}

	public static get WOODEN_DOORS(): Tag {
		return Tag.$javaClass.WOODEN_DOORS;
	}

	public static get WOODEN_FENCES(): Tag {
		return Tag.$javaClass.WOODEN_FENCES;
	}

	public static get WOODEN_PRESSURE_PLATES(): Tag {
		return Tag.$javaClass.WOODEN_PRESSURE_PLATES;
	}

	public static get WOODEN_SLABS(): Tag {
		return Tag.$javaClass.WOODEN_SLABS;
	}

	public static get WOODEN_STAIRS(): Tag {
		return Tag.$javaClass.WOODEN_STAIRS;
	}

	public static get WOODEN_TRAPDOORS(): Tag {
		return Tag.$javaClass.WOODEN_TRAPDOORS;
	}

	public static get WOOL(): Tag {
		return Tag.$javaClass.WOOL;
	}

}

