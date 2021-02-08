declare var Java: any;
import Annotation from '../../../java/lang/annotation/Annotation.js'
import Class from '../../../java/lang/Class.js'
import EventPriority from './EventPriority.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'

export default interface EventHandler extends Annotation {
	annotationType(): Class;
	ignoreCancelled(): boolean;
	priority(): EventPriority;
}

export default class EventHandler {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.EventHandler');
	}
	public static $isInstance(obj: any): obj is EventHandler {
		return obj instanceof EventHandler.$javaClass;
	}

}

