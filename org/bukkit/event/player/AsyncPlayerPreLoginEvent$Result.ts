declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import Enum from '../../../../java/lang/Enum.js'
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'

export default interface AsyncPlayerPreLoginEvent$Result extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
}

export default class AsyncPlayerPreLoginEvent$Result {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.AsyncPlayerPreLoginEvent$Result');
	}
	public static $isInstance(obj: any): obj is AsyncPlayerPreLoginEvent$Result {
		return obj instanceof AsyncPlayerPreLoginEvent$Result.$javaClass;
	}

	public static get ALLOWED(): AsyncPlayerPreLoginEvent$Result {
		return this.$javaClass.ALLOWED;
	}
	public static get KICK_BANNED(): AsyncPlayerPreLoginEvent$Result {
		return this.$javaClass.KICK_BANNED;
	}
	public static get KICK_FULL(): AsyncPlayerPreLoginEvent$Result {
		return this.$javaClass.KICK_FULL;
	}
	public static get KICK_OTHER(): AsyncPlayerPreLoginEvent$Result {
		return this.$javaClass.KICK_OTHER;
	}
	public static get KICK_WHITELIST(): AsyncPlayerPreLoginEvent$Result {
		return this.$javaClass.KICK_WHITELIST;
	}
}

