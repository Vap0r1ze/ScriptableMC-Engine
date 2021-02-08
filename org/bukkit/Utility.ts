declare var Java: any;

export default interface Utility {
	annotationType(): any;
}

export default class Utility {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.Utility');
	}
	public static $isInstance(obj: any): obj is Utility {
		return obj instanceof Utility.$javaClass;
	}

}

