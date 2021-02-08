declare var Java: any;
import Class from '../../../java/lang/Class.js'
import Entity from '../../../org/bukkit/entity/Entity.js'
import HumanEntity from '../../../org/bukkit/entity/HumanEntity.js'
import Location from '../../../org/bukkit/Location.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'

export default interface LootContext extends Object {
	getKiller(): HumanEntity;
	getLocation(): Location;
	getLootedEntity(): Entity;
	getLootingModifier(): number;
	getLuck(): number;
}

export default class LootContext {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.loot.LootContext');
	}
	public static $isInstance(obj: any): obj is LootContext {
		return obj instanceof LootContext.$javaClass;
	}

	public static get DEFAULT_LOOT_MODIFIER(): number {
		return LootContext.$javaClass.DEFAULT_LOOT_MODIFIER;
	}

}

