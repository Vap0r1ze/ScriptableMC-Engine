declare var Java: any;
import Class from '../../../java/lang/Class.js'
import Enum from '../../../java/lang/Enum.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'

export default interface PluginLoadOrder extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
}

export default class PluginLoadOrder {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.plugin.PluginLoadOrder');
	}
	public static $isInstance(obj: any): obj is PluginLoadOrder {
		return obj instanceof PluginLoadOrder.$javaClass;
	}

	public static get POSTWORLD(): PluginLoadOrder {
		return this.$javaClass.POSTWORLD;
	}
	public static get STARTUP(): PluginLoadOrder {
		return this.$javaClass.STARTUP;
	}
}

