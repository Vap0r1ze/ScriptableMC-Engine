declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import Enum from '../../../../java/lang/Enum.js'
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'

export default interface PluginChannelDirection extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
}

export default class PluginChannelDirection {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.plugin.messaging.PluginChannelDirection');
	}
	public static $isInstance(obj: any): obj is PluginChannelDirection {
		return obj instanceof PluginChannelDirection.$javaClass;
	}

	public static get INCOMING(): PluginChannelDirection {
		return this.$javaClass.INCOMING;
	}
	public static get OUTGOING(): PluginChannelDirection {
		return this.$javaClass.OUTGOING;
	}
}

