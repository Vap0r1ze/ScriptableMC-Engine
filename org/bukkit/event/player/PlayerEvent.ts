declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import Event from '../../../../org/bukkit/event/Event.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Object from '../../../../java/lang/Object.js'
import Player from '../../../../org/bukkit/entity/Player.js'
import String from '../../../../java/lang/String.js'

export default interface PlayerEvent extends Event {
	getEventName(): string;
	getHandlers(): HandlerList;
	getPlayer(): Player;
	isAsynchronous(): boolean;
}

export default class PlayerEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerEvent');
	}
	public static $isInstance(obj: any): obj is PlayerEvent {
		return obj instanceof PlayerEvent.$javaClass;
	}

	constructor(who: Player);
	constructor(...args: any[]) {
		return new PlayerEvent.$javaClass(...args);
	}

}

