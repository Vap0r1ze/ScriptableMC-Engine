declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import Enum from '../../../../java/lang/Enum.js'
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'

export default interface PlayerAnimationType extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
}

export default class PlayerAnimationType {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerAnimationType');
	}
	public static $isInstance(obj: any): obj is PlayerAnimationType {
		return obj instanceof PlayerAnimationType.$javaClass;
	}

	public static get ARM_SWING(): PlayerAnimationType {
		return this.$javaClass.ARM_SWING;
	}
}

