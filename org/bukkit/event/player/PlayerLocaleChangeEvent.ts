declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Object from '../../../../java/lang/Object.js'
import Player from '../../../../org/bukkit/entity/Player.js'
import PlayerEvent from './PlayerEvent.js'
import String from '../../../../java/lang/String.js'

export default interface PlayerLocaleChangeEvent extends PlayerEvent {
	getEventName(): string;
	getHandlers(): HandlerList;
	getLocale(): string;
	getPlayer(): Player;
	isAsynchronous(): boolean;
}

export default class PlayerLocaleChangeEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerLocaleChangeEvent');
	}
	public static $isInstance(obj: any): obj is PlayerLocaleChangeEvent {
		return obj instanceof PlayerLocaleChangeEvent.$javaClass;
	}

	constructor(who: Player, locale: string);
	constructor(...args: any[]) {
		return new PlayerLocaleChangeEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PlayerLocaleChangeEvent.$javaClass.getHandlerList(...args);
	}

}

