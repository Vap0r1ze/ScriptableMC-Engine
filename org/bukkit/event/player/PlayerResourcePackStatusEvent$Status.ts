declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import Enum from '../../../../java/lang/Enum.js'
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'

export default interface PlayerResourcePackStatusEvent$Status extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
}

export default class PlayerResourcePackStatusEvent$Status {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerResourcePackStatusEvent$Status');
	}
	public static $isInstance(obj: any): obj is PlayerResourcePackStatusEvent$Status {
		return obj instanceof PlayerResourcePackStatusEvent$Status.$javaClass;
	}

	public static get ACCEPTED(): PlayerResourcePackStatusEvent$Status {
		return this.$javaClass.ACCEPTED;
	}
	public static get DECLINED(): PlayerResourcePackStatusEvent$Status {
		return this.$javaClass.DECLINED;
	}
	public static get FAILED_DOWNLOAD(): PlayerResourcePackStatusEvent$Status {
		return this.$javaClass.FAILED_DOWNLOAD;
	}
	public static get SUCCESSFULLY_LOADED(): PlayerResourcePackStatusEvent$Status {
		return this.$javaClass.SUCCESSFULLY_LOADED;
	}
}

