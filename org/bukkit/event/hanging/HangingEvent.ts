declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import Event from '../../../../org/bukkit/event/Event.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Hanging from '../../../../org/bukkit/entity/Hanging.js'
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'

export default interface HangingEvent extends Event {
	getEntity(): Hanging;
	getEventName(): string;
	getHandlers(): HandlerList;
	isAsynchronous(): boolean;
}

export default class HangingEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.hanging.HangingEvent');
	}
	public static $isInstance(obj: any): obj is HangingEvent {
		return obj instanceof HangingEvent.$javaClass;
	}

}

