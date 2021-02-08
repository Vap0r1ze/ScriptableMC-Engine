declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Object from '../../../../java/lang/Object.js'
import Player from '../../../../org/bukkit/entity/Player.js'
import PlayerEvent from './PlayerEvent.js'
import String from '../../../../java/lang/String.js'

export default interface PlayerChannelEvent extends PlayerEvent {
	getChannel(): string;
	getEventName(): string;
	getHandlers(): HandlerList;
	getPlayer(): Player;
	isAsynchronous(): boolean;
}

export default class PlayerChannelEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerChannelEvent');
	}
	public static $isInstance(obj: any): obj is PlayerChannelEvent {
		return obj instanceof PlayerChannelEvent.$javaClass;
	}

	constructor(player: Player, channel: string);
	constructor(...args: any[]) {
		return new PlayerChannelEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PlayerChannelEvent.$javaClass.getHandlerList(...args);
	}

}

