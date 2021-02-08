declare var Java: any;
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Class from '../../../../java/lang/Class.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Object from '../../../../java/lang/Object.js'
import Player from '../../../../org/bukkit/entity/Player.js'
import PlayerAnimationType from './PlayerAnimationType.js'
import PlayerEvent from './PlayerEvent.js'
import String from '../../../../java/lang/String.js'

export default interface PlayerAnimationEvent extends PlayerEvent, Cancellable {
	getAnimationType(): PlayerAnimationType;
	getEventName(): string;
	getHandlers(): HandlerList;
	getPlayer(): Player;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
}

export default class PlayerAnimationEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerAnimationEvent');
	}
	public static $isInstance(obj: any): obj is PlayerAnimationEvent {
		return obj instanceof PlayerAnimationEvent.$javaClass;
	}

	constructor(player: Player);
	constructor(...args: any[]) {
		return new PlayerAnimationEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PlayerAnimationEvent.$javaClass.getHandlerList(...args);
	}

}

