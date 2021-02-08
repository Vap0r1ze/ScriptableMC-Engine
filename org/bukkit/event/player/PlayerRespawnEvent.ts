declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Location from '../../../../org/bukkit/Location.js'
import Object from '../../../../java/lang/Object.js'
import Player from '../../../../org/bukkit/entity/Player.js'
import PlayerEvent from './PlayerEvent.js'
import String from '../../../../java/lang/String.js'

export default interface PlayerRespawnEvent extends PlayerEvent {
	getEventName(): string;
	getHandlers(): HandlerList;
	getPlayer(): Player;
	getRespawnLocation(): Location;
	isAnchorSpawn(): boolean;
	isAsynchronous(): boolean;
	isBedSpawn(): boolean;
	setRespawnLocation(respawnLocation: Location): void;
}

export default class PlayerRespawnEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerRespawnEvent');
	}
	public static $isInstance(obj: any): obj is PlayerRespawnEvent {
		return obj instanceof PlayerRespawnEvent.$javaClass;
	}

	constructor(respawnPlayer: Player, respawnLocation: Location, isBedSpawn: boolean);
	constructor(respawnPlayer: Player, respawnLocation: Location, isBedSpawn: boolean, isAnchorSpawn: boolean);
	constructor(...args: any[]) {
		return new PlayerRespawnEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PlayerRespawnEvent.$javaClass.getHandlerList(...args);
	}

}

