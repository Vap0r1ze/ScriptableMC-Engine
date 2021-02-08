declare var Java: any;
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Class from '../../../../java/lang/Class.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Object from '../../../../java/lang/Object.js'
import Player from '../../../../org/bukkit/entity/Player.js'
import PlayerEvent from './PlayerEvent.js'
import String from '../../../../java/lang/String.js'

export default interface PlayerToggleFlightEvent extends PlayerEvent, Cancellable {
	getEventName(): string;
	getHandlers(): HandlerList;
	getPlayer(): Player;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	isFlying(): boolean;
	setCancelled(cancel: boolean): void;
}

export default class PlayerToggleFlightEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerToggleFlightEvent');
	}
	public static $isInstance(obj: any): obj is PlayerToggleFlightEvent {
		return obj instanceof PlayerToggleFlightEvent.$javaClass;
	}

	constructor(player: Player, isFlying: boolean);
	constructor(...args: any[]) {
		return new PlayerToggleFlightEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PlayerToggleFlightEvent.$javaClass.getHandlerList(...args);
	}

}

