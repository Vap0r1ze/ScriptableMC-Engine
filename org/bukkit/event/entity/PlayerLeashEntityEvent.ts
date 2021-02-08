declare var Java: any;
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Class from '../../../../java/lang/Class.js'
import Entity from '../../../../org/bukkit/entity/Entity.js'
import Event from '../../../../org/bukkit/event/Event.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Object from '../../../../java/lang/Object.js'
import Player from '../../../../org/bukkit/entity/Player.js'
import String from '../../../../java/lang/String.js'

export default interface PlayerLeashEntityEvent extends Event, Cancellable {
	getEntity(): Entity;
	getEventName(): string;
	getHandlers(): HandlerList;
	getLeashHolder(): Entity;
	getPlayer(): Player;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
}

export default class PlayerLeashEntityEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.PlayerLeashEntityEvent');
	}
	public static $isInstance(obj: any): obj is PlayerLeashEntityEvent {
		return obj instanceof PlayerLeashEntityEvent.$javaClass;
	}

	constructor(what: Entity, leashHolder: Entity, leasher: Player);
	constructor(...args: any[]) {
		return new PlayerLeashEntityEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PlayerLeashEntityEvent.$javaClass.getHandlerList(...args);
	}

}

