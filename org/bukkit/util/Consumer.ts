declare var Java: any;

export default interface Consumer {
	accept(arg0: any): void;
}

export default class Consumer {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.util.Consumer');
	}
	public static $isInstance(obj: any): obj is Consumer {
		return obj instanceof Consumer.$javaClass;
	}

}

