declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Object from '../../../../java/lang/Object.js'
import Player from '../../../../org/bukkit/entity/Player.js'
import PlayerEvent from './PlayerEvent.js'
import PlayerResourcePackStatusEvent$Status from './PlayerResourcePackStatusEvent$Status.js'
import String from '../../../../java/lang/String.js'

export default interface PlayerResourcePackStatusEvent extends PlayerEvent {
	getEventName(): string;
	getHandlers(): HandlerList;
	getPlayer(): Player;
	getStatus(): PlayerResourcePackStatusEvent$Status;
	isAsynchronous(): boolean;
}

export default class PlayerResourcePackStatusEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerResourcePackStatusEvent');
	}
	public static $isInstance(obj: any): obj is PlayerResourcePackStatusEvent {
		return obj instanceof PlayerResourcePackStatusEvent.$javaClass;
	}

	constructor(who: Player, resourcePackStatus: PlayerResourcePackStatusEvent$Status);
	constructor(...args: any[]) {
		return new PlayerResourcePackStatusEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PlayerResourcePackStatusEvent.$javaClass.getHandlerList(...args);
	}

}

