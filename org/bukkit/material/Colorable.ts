declare var Java: any;
import DyeColor from '../../../org/bukkit/DyeColor.js'

export default interface Colorable {
	getColor(): DyeColor;
	setColor(arg0: DyeColor): void;
}

export default class Colorable {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.Colorable');
	}
	public static $isInstance(obj: any): obj is Colorable {
		return obj instanceof Colorable.$javaClass;
	}

}

