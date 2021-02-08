declare var Java: any;
import Class from '../../../java/lang/Class.js'
import Enum from '../../../java/lang/Enum.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'

export default interface Fox$Type extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
}

export default class Fox$Type {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.entity.Fox$Type');
	}
	public static $isInstance(obj: any): obj is Fox$Type {
		return obj instanceof Fox$Type.$javaClass;
	}

	public static get RED(): Fox$Type {
		return this.$javaClass.RED;
	}
	public static get SNOW(): Fox$Type {
		return this.$javaClass.SNOW;
	}
}

