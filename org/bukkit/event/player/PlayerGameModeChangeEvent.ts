declare var Java: any;
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Class from '../../../../java/lang/Class.js'
import GameMode from '../../../../org/bukkit/GameMode.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Object from '../../../../java/lang/Object.js'
import Player from '../../../../org/bukkit/entity/Player.js'
import PlayerEvent from './PlayerEvent.js'
import String from '../../../../java/lang/String.js'

export default interface PlayerGameModeChangeEvent extends PlayerEvent, Cancellable {
	getEventName(): string;
	getHandlers(): HandlerList;
	getNewGameMode(): GameMode;
	getPlayer(): Player;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
}

export default class PlayerGameModeChangeEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerGameModeChangeEvent');
	}
	public static $isInstance(obj: any): obj is PlayerGameModeChangeEvent {
		return obj instanceof PlayerGameModeChangeEvent.$javaClass;
	}

	constructor(player: Player, newGameMode: GameMode);
	constructor(...args: any[]) {
		return new PlayerGameModeChangeEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PlayerGameModeChangeEvent.$javaClass.getHandlerList(...args);
	}

}

