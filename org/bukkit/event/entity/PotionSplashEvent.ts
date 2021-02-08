declare var Java: any;
import Block from '../../../../org/bukkit/block/Block.js'
import BlockFace from '../../../../org/bukkit/block/BlockFace.js'
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Class from '../../../../java/lang/Class.js'
import Collection from '../../../../java/util/Collection.js'
import Entity from '../../../../org/bukkit/entity/Entity.js'
import EntityType from '../../../../org/bukkit/entity/EntityType.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import LivingEntity from '../../../../org/bukkit/entity/LivingEntity.js'
import Map from '../../../../java/util/Map.js'
import Object from '../../../../java/lang/Object.js'
import Projectile from '../../../../org/bukkit/entity/Projectile.js'
import ProjectileHitEvent from './ProjectileHitEvent.js'
import String from '../../../../java/lang/String.js'
import ThrownPotion from '../../../../org/bukkit/entity/ThrownPotion.js'

export default interface PotionSplashEvent extends ProjectileHitEvent, Cancellable {
	getAffectedEntities(): Array<LivingEntity>;
	getEntity(): ThrownPotion;
	getEntity(): Projectile;
	getEntity(): Entity;
	getEntityType(): EntityType;
	getEventName(): string;
	getHandlers(): HandlerList;
	getHitBlock(): Block;
	getHitBlockFace(): BlockFace;
	getHitEntity(): Entity;
	getIntensity(entity: LivingEntity): number;
	getPotion(): ThrownPotion;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	setIntensity(entity: LivingEntity, intensity: number): void;
}

export default class PotionSplashEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.PotionSplashEvent');
	}
	public static $isInstance(obj: any): obj is PotionSplashEvent {
		return obj instanceof PotionSplashEvent.$javaClass;
	}

	constructor(potion: ThrownPotion, affectedEntities: Map);
	constructor(...args: any[]) {
		return new PotionSplashEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PotionSplashEvent.$javaClass.getHandlerList(...args);
	}

}

