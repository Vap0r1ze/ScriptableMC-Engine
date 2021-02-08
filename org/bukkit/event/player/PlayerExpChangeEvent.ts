declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Object from '../../../../java/lang/Object.js'
import Player from '../../../../org/bukkit/entity/Player.js'
import PlayerEvent from './PlayerEvent.js'
import String from '../../../../java/lang/String.js'

export default interface PlayerExpChangeEvent extends PlayerEvent {
	getAmount(): number;
	getEventName(): string;
	getHandlers(): HandlerList;
	getPlayer(): Player;
	isAsynchronous(): boolean;
	setAmount(amount: number): void;
}

export default class PlayerExpChangeEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerExpChangeEvent');
	}
	public static $isInstance(obj: any): obj is PlayerExpChangeEvent {
		return obj instanceof PlayerExpChangeEvent.$javaClass;
	}

	constructor(player: Player, expAmount: number);
	constructor(...args: any[]) {
		return new PlayerExpChangeEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PlayerExpChangeEvent.$javaClass.getHandlerList(...args);
	}

}

