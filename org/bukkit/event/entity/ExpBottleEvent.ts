declare var Java: any;
import Block from '../../../../org/bukkit/block/Block.js'
import BlockFace from '../../../../org/bukkit/block/BlockFace.js'
import Class from '../../../../java/lang/Class.js'
import Entity from '../../../../org/bukkit/entity/Entity.js'
import EntityType from '../../../../org/bukkit/entity/EntityType.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Object from '../../../../java/lang/Object.js'
import Projectile from '../../../../org/bukkit/entity/Projectile.js'
import ProjectileHitEvent from './ProjectileHitEvent.js'
import String from '../../../../java/lang/String.js'
import ThrownExpBottle from '../../../../org/bukkit/entity/ThrownExpBottle.js'

export default interface ExpBottleEvent extends ProjectileHitEvent {
	getEntity(): ThrownExpBottle;
	getEntity(): Projectile;
	getEntity(): Entity;
	getEntityType(): EntityType;
	getEventName(): string;
	getExperience(): number;
	getHandlers(): HandlerList;
	getHitBlock(): Block;
	getHitBlockFace(): BlockFace;
	getHitEntity(): Entity;
	getShowEffect(): boolean;
	isAsynchronous(): boolean;
	setExperience(exp: number): void;
	setShowEffect(showEffect: boolean): void;
}

export default class ExpBottleEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.ExpBottleEvent');
	}
	public static $isInstance(obj: any): obj is ExpBottleEvent {
		return obj instanceof ExpBottleEvent.$javaClass;
	}

	constructor(bottle: ThrownExpBottle, exp: number);
	constructor(...args: any[]) {
		return new ExpBottleEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return ExpBottleEvent.$javaClass.getHandlerList(...args);
	}

}

