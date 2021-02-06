declare var Java: any;

export default interface Cancellable {
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
}

export default class Cancellable {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.Cancellable');
	}
	public static $isInstance(obj: any): obj is Cancellable {
		return obj instanceof Cancellable.$javaClass;
	}

}

