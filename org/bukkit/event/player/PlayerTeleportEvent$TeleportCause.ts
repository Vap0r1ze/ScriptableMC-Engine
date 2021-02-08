declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import Enum from '../../../../java/lang/Enum.js'
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'

export default interface PlayerTeleportEvent$TeleportCause extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
}

export default class PlayerTeleportEvent$TeleportCause {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerTeleportEvent$TeleportCause');
	}
	public static $isInstance(obj: any): obj is PlayerTeleportEvent$TeleportCause {
		return obj instanceof PlayerTeleportEvent$TeleportCause.$javaClass;
	}

	public static get CHORUS_FRUIT(): PlayerTeleportEvent$TeleportCause {
		return this.$javaClass.CHORUS_FRUIT;
	}
	public static get COMMAND(): PlayerTeleportEvent$TeleportCause {
		return this.$javaClass.COMMAND;
	}
	public static get ENDER_PEARL(): PlayerTeleportEvent$TeleportCause {
		return this.$javaClass.ENDER_PEARL;
	}
	public static get END_GATEWAY(): PlayerTeleportEvent$TeleportCause {
		return this.$javaClass.END_GATEWAY;
	}
	public static get END_PORTAL(): PlayerTeleportEvent$TeleportCause {
		return this.$javaClass.END_PORTAL;
	}
	public static get NETHER_PORTAL(): PlayerTeleportEvent$TeleportCause {
		return this.$javaClass.NETHER_PORTAL;
	}
	public static get PLUGIN(): PlayerTeleportEvent$TeleportCause {
		return this.$javaClass.PLUGIN;
	}
	public static get SPECTATE(): PlayerTeleportEvent$TeleportCause {
		return this.$javaClass.SPECTATE;
	}
	public static get UNKNOWN(): PlayerTeleportEvent$TeleportCause {
		return this.$javaClass.UNKNOWN;
	}
}

