declare var Java: any;
import Class from '../../java/lang/Class.js'
import Object from '../../java/lang/Object.js'
import Serializable from '../../java/io/Serializable.js'
import String from '../../java/lang/String.js'

export default interface EventObject extends Object, Serializable {
	getSource(): Object;
}

export default class EventObject {
	public static get $javaClass(): any {
		return Java.type('java.util.EventObject');
	}
	public static $isInstance(obj: any): obj is EventObject {
		return obj instanceof EventObject.$javaClass;
	}

	constructor(arg0: Object);
	constructor(...args: any[]) {
		return new EventObject.$javaClass(...args);
	}

}

