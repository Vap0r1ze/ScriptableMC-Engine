declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import Entity from '../../../../org/bukkit/entity/Entity.js'
import EntityDamageEvent from './EntityDamageEvent.js'
import EntityDamageEvent$DamageCause from './EntityDamageEvent$DamageCause.js'
import EntityDamageEvent$DamageModifier from './EntityDamageEvent$DamageModifier.js'
import EntityType from '../../../../org/bukkit/entity/EntityType.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Map from '../../../../java/util/Map.js'
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'

export default interface EntityDamageByEntityEvent extends EntityDamageEvent {
	getCause(): EntityDamageEvent$DamageCause;
	getDamage(): number;
	getDamage(type: EntityDamageEvent$DamageModifier): number;
	getDamager(): Entity;
	getEntity(): Entity;
	getEntityType(): EntityType;
	getEventName(): string;
	getFinalDamage(): number;
	getHandlers(): HandlerList;
	getOriginalDamage(type: EntityDamageEvent$DamageModifier): number;
	isApplicable(type: EntityDamageEvent$DamageModifier): boolean;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	setDamage(damage: number): void;
	setDamage(type: EntityDamageEvent$DamageModifier, damage: number): void;
}

export default class EntityDamageByEntityEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityDamageByEntityEvent');
	}
	public static $isInstance(obj: any): obj is EntityDamageByEntityEvent {
		return obj instanceof EntityDamageByEntityEvent.$javaClass;
	}

	constructor(damager: Entity, damagee: Entity, cause: EntityDamageEvent$DamageCause, damage: number);
	constructor(damager: Entity, damagee: Entity, cause: EntityDamageEvent$DamageCause, modifiers: Map, modifierFunctions: Map);
	constructor(...args: any[]) {
		return new EntityDamageByEntityEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return EntityDamageByEntityEvent.$javaClass.getHandlerList(...args);
	}

}

