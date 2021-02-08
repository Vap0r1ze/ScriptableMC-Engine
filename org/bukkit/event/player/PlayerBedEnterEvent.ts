declare var Java: any;
import Block from '../../../../org/bukkit/block/Block.js'
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Class from '../../../../java/lang/Class.js'
import Event$Result from '../../../../org/bukkit/event/Event$Result.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Object from '../../../../java/lang/Object.js'
import Player from '../../../../org/bukkit/entity/Player.js'
import PlayerBedEnterEvent$BedEnterResult from './PlayerBedEnterEvent$BedEnterResult.js'
import PlayerEvent from './PlayerEvent.js'
import String from '../../../../java/lang/String.js'

export default interface PlayerBedEnterEvent extends PlayerEvent, Cancellable {
	getBed(): Block;
	getBedEnterResult(): PlayerBedEnterEvent$BedEnterResult;
	getEventName(): string;
	getHandlers(): HandlerList;
	getPlayer(): Player;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	setUseBed(useBed: Event$Result): void;
	useBed(): Event$Result;
}

export default class PlayerBedEnterEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerBedEnterEvent');
	}
	public static $isInstance(obj: any): obj is PlayerBedEnterEvent {
		return obj instanceof PlayerBedEnterEvent.$javaClass;
	}

	constructor(who: Player, bed: Block);
	constructor(who: Player, bed: Block, bedEnterResult: PlayerBedEnterEvent$BedEnterResult);
	constructor(...args: any[]) {
		return new PlayerBedEnterEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PlayerBedEnterEvent.$javaClass.getHandlerList(...args);
	}

}

