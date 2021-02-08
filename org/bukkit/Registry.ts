declare var Java: any;
import Consumer from '../../java/util/function/Consumer.js'
import Iterable from '../../java/lang/Iterable.js'
import Iterator from '../../java/util/Iterator.js'
import Keyed from './Keyed.js'
import NamespacedKey from './NamespacedKey.js'
import Spliterator from '../../java/util/Spliterator.js'

export default interface Registry extends Iterable {
	forEach(arg0: Consumer): void;
	get(arg0: NamespacedKey): Keyed;
	iterator(): Iterator;
	spliterator(): Spliterator;
}

export default class Registry {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.Registry');
	}
	public static $isInstance(obj: any): obj is Registry {
		return obj instanceof Registry.$javaClass;
	}

	public static get ADVANCEMENT(): Registry {
		return Registry.$javaClass.ADVANCEMENT;
	}

	public static get ART(): Registry {
		return Registry.$javaClass.ART;
	}

	public static get ATTRIBUTE(): Registry {
		return Registry.$javaClass.ATTRIBUTE;
	}

	public static get BIOME(): Registry {
		return Registry.$javaClass.BIOME;
	}

	public static get BOSS_BARS(): Registry {
		return Registry.$javaClass.BOSS_BARS;
	}

	public static get ENCHANTMENT(): Registry {
		return Registry.$javaClass.ENCHANTMENT;
	}

	public static get ENTITY_TYPE(): Registry {
		return Registry.$javaClass.ENTITY_TYPE;
	}

	public static get FLUID(): Registry {
		return Registry.$javaClass.FLUID;
	}

	public static get LOOT_TABLES(): Registry {
		return Registry.$javaClass.LOOT_TABLES;
	}

	public static get MATERIAL(): Registry {
		return Registry.$javaClass.MATERIAL;
	}

	public static get MEMORY_MODULE_TYPE(): Registry {
		return Registry.$javaClass.MEMORY_MODULE_TYPE;
	}

	public static get SOUNDS(): Registry {
		return Registry.$javaClass.SOUNDS;
	}

	public static get STATISTIC(): Registry {
		return Registry.$javaClass.STATISTIC;
	}

	public static get VILLAGER_PROFESSION(): Registry {
		return Registry.$javaClass.VILLAGER_PROFESSION;
	}

	public static get VILLAGER_TYPE(): Registry {
		return Registry.$javaClass.VILLAGER_TYPE;
	}

}

