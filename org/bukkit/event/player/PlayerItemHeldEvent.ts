declare var Java: any;
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Class from '../../../../java/lang/Class.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Object from '../../../../java/lang/Object.js'
import Player from '../../../../org/bukkit/entity/Player.js'
import PlayerEvent from './PlayerEvent.js'
import String from '../../../../java/lang/String.js'

export default interface PlayerItemHeldEvent extends PlayerEvent, Cancellable {
	getEventName(): string;
	getHandlers(): HandlerList;
	getNewSlot(): number;
	getPlayer(): Player;
	getPreviousSlot(): number;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
}

export default class PlayerItemHeldEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerItemHeldEvent');
	}
	public static $isInstance(obj: any): obj is PlayerItemHeldEvent {
		return obj instanceof PlayerItemHeldEvent.$javaClass;
	}

	constructor(player: Player, previous: number, current: number);
	constructor(...args: any[]) {
		return new PlayerItemHeldEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PlayerItemHeldEvent.$javaClass.getHandlerList(...args);
	}

}

