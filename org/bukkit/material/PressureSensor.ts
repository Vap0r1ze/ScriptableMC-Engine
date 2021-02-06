declare var Java: any;

export default interface PressureSensor {
	isPressed(): boolean;
}

export default class PressureSensor {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.PressureSensor');
	}
	public static $isInstance(obj: any): obj is PressureSensor {
		return obj instanceof PressureSensor.$javaClass;
	}

}

