declare var Java: any;
import Class from '../../java/lang/Class.js'
import Enum from '../../java/lang/Enum.js'
import Object from '../../java/lang/Object.js'
import String from '../../java/lang/String.js'

export default interface WeatherType extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
}

export default class WeatherType {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.WeatherType');
	}
	public static $isInstance(obj: any): obj is WeatherType {
		return obj instanceof WeatherType.$javaClass;
	}

	public static get CLEAR(): WeatherType {
		return this.$javaClass.CLEAR;
	}
	public static get DOWNFALL(): WeatherType {
		return this.$javaClass.DOWNFALL;
	}
}

