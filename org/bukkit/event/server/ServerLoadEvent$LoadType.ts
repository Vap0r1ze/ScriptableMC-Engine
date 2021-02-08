declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import Enum from '../../../../java/lang/Enum.js'
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'

export default interface ServerLoadEvent$LoadType extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
}

export default class ServerLoadEvent$LoadType {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.server.ServerLoadEvent$LoadType');
	}
	public static $isInstance(obj: any): obj is ServerLoadEvent$LoadType {
		return obj instanceof ServerLoadEvent$LoadType.$javaClass;
	}

	public static get RELOAD(): ServerLoadEvent$LoadType {
		return this.$javaClass.RELOAD;
	}
	public static get STARTUP(): ServerLoadEvent$LoadType {
		return this.$javaClass.STARTUP;
	}
}

