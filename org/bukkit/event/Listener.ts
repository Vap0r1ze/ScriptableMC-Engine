declare var Java: any;

export default class Listener {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.Listener');
	}
	public static $isInstance(obj: any): obj is Listener {
		return obj instanceof Listener.$javaClass;
	}

}

