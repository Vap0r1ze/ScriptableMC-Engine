declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import Entity from '../../../../org/bukkit/entity/Entity.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Hanging from '../../../../org/bukkit/entity/Hanging.js'
import HangingBreakEvent from './HangingBreakEvent.js'
import HangingBreakEvent$RemoveCause from './HangingBreakEvent$RemoveCause.js'
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'

export default interface HangingBreakByEntityEvent extends HangingBreakEvent {
	getCause(): HangingBreakEvent$RemoveCause;
	getEntity(): Hanging;
	getEventName(): string;
	getHandlers(): HandlerList;
	getRemover(): Entity;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
}

export default class HangingBreakByEntityEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.hanging.HangingBreakByEntityEvent');
	}
	public static $isInstance(obj: any): obj is HangingBreakByEntityEvent {
		return obj instanceof HangingBreakByEntityEvent.$javaClass;
	}

	constructor(hanging: Hanging, remover: Entity);
	constructor(hanging: Hanging, remover: Entity, cause: HangingBreakEvent$RemoveCause);
	constructor(...args: any[]) {
		return new HangingBreakByEntityEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return HangingBreakByEntityEvent.$javaClass.getHandlerList(...args);
	}

}

