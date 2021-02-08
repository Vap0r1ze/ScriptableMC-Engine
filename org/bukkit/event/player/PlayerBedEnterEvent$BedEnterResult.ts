declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import Enum from '../../../../java/lang/Enum.js'
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'

export default interface PlayerBedEnterEvent$BedEnterResult extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
}

export default class PlayerBedEnterEvent$BedEnterResult {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerBedEnterEvent$BedEnterResult');
	}
	public static $isInstance(obj: any): obj is PlayerBedEnterEvent$BedEnterResult {
		return obj instanceof PlayerBedEnterEvent$BedEnterResult.$javaClass;
	}

	public static get NOT_POSSIBLE_HERE(): PlayerBedEnterEvent$BedEnterResult {
		return this.$javaClass.NOT_POSSIBLE_HERE;
	}
	public static get NOT_POSSIBLE_NOW(): PlayerBedEnterEvent$BedEnterResult {
		return this.$javaClass.NOT_POSSIBLE_NOW;
	}
	public static get NOT_SAFE(): PlayerBedEnterEvent$BedEnterResult {
		return this.$javaClass.NOT_SAFE;
	}
	public static get OK(): PlayerBedEnterEvent$BedEnterResult {
		return this.$javaClass.OK;
	}
	public static get OTHER_PROBLEM(): PlayerBedEnterEvent$BedEnterResult {
		return this.$javaClass.OTHER_PROBLEM;
	}
	public static get TOO_FAR_AWAY(): PlayerBedEnterEvent$BedEnterResult {
		return this.$javaClass.TOO_FAR_AWAY;
	}
}

