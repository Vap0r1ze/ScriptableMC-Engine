declare var Java: any;
import Advancement from '../../../../org/bukkit/advancement/Advancement.js'
import Class from '../../../../java/lang/Class.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Object from '../../../../java/lang/Object.js'
import Player from '../../../../org/bukkit/entity/Player.js'
import PlayerEvent from './PlayerEvent.js'
import String from '../../../../java/lang/String.js'

export default interface PlayerAdvancementDoneEvent extends PlayerEvent {
	getAdvancement(): Advancement;
	getEventName(): string;
	getHandlers(): HandlerList;
	getPlayer(): Player;
	isAsynchronous(): boolean;
}

export default class PlayerAdvancementDoneEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerAdvancementDoneEvent');
	}
	public static $isInstance(obj: any): obj is PlayerAdvancementDoneEvent {
		return obj instanceof PlayerAdvancementDoneEvent.$javaClass;
	}

	constructor(who: Player, advancement: Advancement);
	constructor(...args: any[]) {
		return new PlayerAdvancementDoneEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PlayerAdvancementDoneEvent.$javaClass.getHandlerList(...args);
	}

}

