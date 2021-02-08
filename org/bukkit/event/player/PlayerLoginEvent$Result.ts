declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import Enum from '../../../../java/lang/Enum.js'
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'

export default interface PlayerLoginEvent$Result extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
}

export default class PlayerLoginEvent$Result {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerLoginEvent$Result');
	}
	public static $isInstance(obj: any): obj is PlayerLoginEvent$Result {
		return obj instanceof PlayerLoginEvent$Result.$javaClass;
	}

	public static get ALLOWED(): PlayerLoginEvent$Result {
		return this.$javaClass.ALLOWED;
	}
	public static get KICK_BANNED(): PlayerLoginEvent$Result {
		return this.$javaClass.KICK_BANNED;
	}
	public static get KICK_FULL(): PlayerLoginEvent$Result {
		return this.$javaClass.KICK_FULL;
	}
	public static get KICK_OTHER(): PlayerLoginEvent$Result {
		return this.$javaClass.KICK_OTHER;
	}
	public static get KICK_WHITELIST(): PlayerLoginEvent$Result {
		return this.$javaClass.KICK_WHITELIST;
	}
}

