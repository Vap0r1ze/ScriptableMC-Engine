declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Object from '../../../../java/lang/Object.js'
import Player from '../../../../org/bukkit/entity/Player.js'
import PlayerEvent from './PlayerEvent.js'
import String from '../../../../java/lang/String.js'

export default interface PlayerQuitEvent extends PlayerEvent {
	getEventName(): string;
	getHandlers(): HandlerList;
	getPlayer(): Player;
	getQuitMessage(): string;
	isAsynchronous(): boolean;
	setQuitMessage(quitMessage: string): void;
}

export default class PlayerQuitEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerQuitEvent');
	}
	public static $isInstance(obj: any): obj is PlayerQuitEvent {
		return obj instanceof PlayerQuitEvent.$javaClass;
	}

	constructor(who: Player, quitMessage: string);
	constructor(...args: any[]) {
		return new PlayerQuitEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PlayerQuitEvent.$javaClass.getHandlerList(...args);
	}

}

