declare var Java: any;
import Class from '../../java/lang/Class.js'
import Enum from '../../java/lang/Enum.js'
import Object from '../../java/lang/Object.js'
import String from '../../java/lang/String.js'

export default interface BanList$Type extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
}

export default class BanList$Type {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.BanList$Type');
	}
	public static $isInstance(obj: any): obj is BanList$Type {
		return obj instanceof BanList$Type.$javaClass;
	}

	public static get IP(): BanList$Type {
		return this.$javaClass.IP;
	}
	public static get NAME(): BanList$Type {
		return this.$javaClass.NAME;
	}
}

