declare var Java: any;
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Class from '../../../../java/lang/Class.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Object from '../../../../java/lang/Object.js'
import Player from '../../../../org/bukkit/entity/Player.js'
import PlayerEvent from './PlayerEvent.js'
import String from '../../../../java/lang/String.js'

export default interface PlayerToggleSprintEvent extends PlayerEvent, Cancellable {
	getEventName(): string;
	getHandlers(): HandlerList;
	getPlayer(): Player;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	isSprinting(): boolean;
	setCancelled(cancel: boolean): void;
}

export default class PlayerToggleSprintEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerToggleSprintEvent');
	}
	public static $isInstance(obj: any): obj is PlayerToggleSprintEvent {
		return obj instanceof PlayerToggleSprintEvent.$javaClass;
	}

	constructor(player: Player, isSprinting: boolean);
	constructor(...args: any[]) {
		return new PlayerToggleSprintEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PlayerToggleSprintEvent.$javaClass.getHandlerList(...args);
	}

}

