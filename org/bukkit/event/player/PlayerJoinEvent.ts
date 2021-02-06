declare var Java: any;
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Player from '../../../../org/bukkit/entity/Player.js'
import PlayerEvent from './PlayerEvent.js'

export default interface PlayerJoinEvent extends PlayerEvent {
	getEventName(): string;
	getHandlers(): HandlerList;
	getJoinMessage(): string;
	getPlayer(): Player;
	isAsynchronous(): boolean;
	setJoinMessage(joinMessage: string): void;
}

export default class PlayerJoinEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerJoinEvent');
	}
	public static $isInstance(obj: any): obj is PlayerJoinEvent {
		return obj instanceof PlayerJoinEvent.$javaClass;
	}

	constructor(playerJoined: Player, joinMessage: string);
	constructor(...args: any[]) {
		return new PlayerJoinEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PlayerJoinEvent.$javaClass.getHandlerList(...args);
	}

}

