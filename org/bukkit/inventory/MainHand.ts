declare var Java: any;

export default interface MainHand {
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class MainHand {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.MainHand');
	}
	public static $isInstance(obj: any): obj is MainHand {
		return obj instanceof MainHand.$javaClass;
	}

	public static get LEFT(): MainHand {
		return this.$javaClass.LEFT;
	}
	public static get RIGHT(): MainHand {
		return this.$javaClass.RIGHT;
	}
}

