declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Object from '../../../../java/lang/Object.js'
import Player from '../../../../org/bukkit/entity/Player.js'
import PlayerChannelEvent from './PlayerChannelEvent.js'
import String from '../../../../java/lang/String.js'

export default interface PlayerUnregisterChannelEvent extends PlayerChannelEvent {
	getChannel(): string;
	getEventName(): string;
	getHandlers(): HandlerList;
	getPlayer(): Player;
	isAsynchronous(): boolean;
}

export default class PlayerUnregisterChannelEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerUnregisterChannelEvent');
	}
	public static $isInstance(obj: any): obj is PlayerUnregisterChannelEvent {
		return obj instanceof PlayerUnregisterChannelEvent.$javaClass;
	}

	constructor(player: Player, channel: string);
	constructor(...args: any[]) {
		return new PlayerUnregisterChannelEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PlayerUnregisterChannelEvent.$javaClass.getHandlerList(...args);
	}

}

