declare var Java: any;
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Class from '../../../../java/lang/Class.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Object from '../../../../java/lang/Object.js'
import Player from '../../../../org/bukkit/entity/Player.js'
import PlayerEvent from './PlayerEvent.js'
import Set from '../../../../java/util/Set.js'
import String from '../../../../java/lang/String.js'

export default interface PlayerCommandPreprocessEvent extends PlayerEvent, Cancellable {
	getEventName(): string;
	getHandlers(): HandlerList;
	getMessage(): string;
	getPlayer(): Player;
	getRecipients(): Set;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	setMessage(command: string): void;
	setPlayer(player: Player): void;
}

export default class PlayerCommandPreprocessEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerCommandPreprocessEvent');
	}
	public static $isInstance(obj: any): obj is PlayerCommandPreprocessEvent {
		return obj instanceof PlayerCommandPreprocessEvent.$javaClass;
	}

	constructor(player: Player, message: string);
	constructor(player: Player, message: string, recipients: Set);
	constructor(...args: any[]) {
		return new PlayerCommandPreprocessEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PlayerCommandPreprocessEvent.$javaClass.getHandlerList(...args);
	}

}

