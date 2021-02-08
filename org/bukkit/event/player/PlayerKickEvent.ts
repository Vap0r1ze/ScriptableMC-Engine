declare var Java: any;
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Class from '../../../../java/lang/Class.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Object from '../../../../java/lang/Object.js'
import Player from '../../../../org/bukkit/entity/Player.js'
import PlayerEvent from './PlayerEvent.js'
import String from '../../../../java/lang/String.js'

export default interface PlayerKickEvent extends PlayerEvent, Cancellable {
	getEventName(): string;
	getHandlers(): HandlerList;
	getLeaveMessage(): string;
	getPlayer(): Player;
	getReason(): string;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	setLeaveMessage(leaveMessage: string): void;
	setReason(kickReason: string): void;
}

export default class PlayerKickEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerKickEvent');
	}
	public static $isInstance(obj: any): obj is PlayerKickEvent {
		return obj instanceof PlayerKickEvent.$javaClass;
	}

	constructor(playerKicked: Player, kickReason: string, leaveMessage: string);
	constructor(...args: any[]) {
		return new PlayerKickEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PlayerKickEvent.$javaClass.getHandlerList(...args);
	}

}

