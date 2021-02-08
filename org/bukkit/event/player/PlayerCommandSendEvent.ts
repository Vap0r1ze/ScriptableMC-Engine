declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import Collection from '../../../../java/util/Collection.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Object from '../../../../java/lang/Object.js'
import Player from '../../../../org/bukkit/entity/Player.js'
import PlayerEvent from './PlayerEvent.js'
import String from '../../../../java/lang/String.js'

export default interface PlayerCommandSendEvent extends PlayerEvent {
	getCommands(): Array<string>;
	getEventName(): string;
	getHandlers(): HandlerList;
	getPlayer(): Player;
	isAsynchronous(): boolean;
}

export default class PlayerCommandSendEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerCommandSendEvent');
	}
	public static $isInstance(obj: any): obj is PlayerCommandSendEvent {
		return obj instanceof PlayerCommandSendEvent.$javaClass;
	}

	constructor(player: Player, commands: Array<any>);
	constructor(...args: any[]) {
		return new PlayerCommandSendEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PlayerCommandSendEvent.$javaClass.getHandlerList(...args);
	}

}

