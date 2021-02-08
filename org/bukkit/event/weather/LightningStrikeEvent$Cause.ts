declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import Enum from '../../../../java/lang/Enum.js'
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'

export default interface LightningStrikeEvent$Cause extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
}

export default class LightningStrikeEvent$Cause {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.weather.LightningStrikeEvent$Cause');
	}
	public static $isInstance(obj: any): obj is LightningStrikeEvent$Cause {
		return obj instanceof LightningStrikeEvent$Cause.$javaClass;
	}

	public static get COMMAND(): LightningStrikeEvent$Cause {
		return this.$javaClass.COMMAND;
	}
	public static get TRAP(): LightningStrikeEvent$Cause {
		return this.$javaClass.TRAP;
	}
	public static get TRIDENT(): LightningStrikeEvent$Cause {
		return this.$javaClass.TRIDENT;
	}
	public static get UNKNOWN(): LightningStrikeEvent$Cause {
		return this.$javaClass.UNKNOWN;
	}
	public static get WEATHER(): LightningStrikeEvent$Cause {
		return this.$javaClass.WEATHER;
	}
}

