declare var Java: any;

export default class EventListener {
	public static get $javaClass(): any {
		return Java.type('java.util.EventListener');
	}
	public static $isInstance(obj: any): obj is EventListener {
		return obj instanceof EventListener.$javaClass;
	}

}

