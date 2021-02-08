declare var Java: any;
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Class from '../../../../java/lang/Class.js'
import Entity from '../../../../org/bukkit/entity/Entity.js'
import FishHook from '../../../../org/bukkit/entity/FishHook.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Object from '../../../../java/lang/Object.js'
import Player from '../../../../org/bukkit/entity/Player.js'
import PlayerEvent from './PlayerEvent.js'
import PlayerFishEvent$State from './PlayerFishEvent$State.js'
import String from '../../../../java/lang/String.js'

export default interface PlayerFishEvent extends PlayerEvent, Cancellable {
	getCaught(): Entity;
	getEventName(): string;
	getExpToDrop(): number;
	getHandlers(): HandlerList;
	getHook(): FishHook;
	getPlayer(): Player;
	getState(): PlayerFishEvent$State;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	setExpToDrop(amount: number): void;
}

export default class PlayerFishEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerFishEvent');
	}
	public static $isInstance(obj: any): obj is PlayerFishEvent {
		return obj instanceof PlayerFishEvent.$javaClass;
	}

	constructor(player: Player, entity: Entity, hookEntity: FishHook, state: PlayerFishEvent$State);
	constructor(...args: any[]) {
		return new PlayerFishEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PlayerFishEvent.$javaClass.getHandlerList(...args);
	}

}

