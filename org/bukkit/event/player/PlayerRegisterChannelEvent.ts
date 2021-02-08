declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Object from '../../../../java/lang/Object.js'
import Player from '../../../../org/bukkit/entity/Player.js'
import PlayerChannelEvent from './PlayerChannelEvent.js'
import String from '../../../../java/lang/String.js'

export default interface PlayerRegisterChannelEvent extends PlayerChannelEvent {
	getChannel(): string;
	getEventName(): string;
	getHandlers(): HandlerList;
	getPlayer(): Player;
	isAsynchronous(): boolean;
}

export default class PlayerRegisterChannelEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerRegisterChannelEvent');
	}
	public static $isInstance(obj: any): obj is PlayerRegisterChannelEvent {
		return obj instanceof PlayerRegisterChannelEvent.$javaClass;
	}

	constructor(player: Player, channel: string);
	constructor(...args: any[]) {
		return new PlayerRegisterChannelEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PlayerRegisterChannelEvent.$javaClass.getHandlerList(...args);
	}

}

