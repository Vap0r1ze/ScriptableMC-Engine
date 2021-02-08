declare var Java: any;
import Class from '../../../java/lang/Class.js'
import Enum from '../../../java/lang/Enum.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'

export default interface RenderType extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
}

export default class RenderType {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.scoreboard.RenderType');
	}
	public static $isInstance(obj: any): obj is RenderType {
		return obj instanceof RenderType.$javaClass;
	}

	public static get HEARTS(): RenderType {
		return this.$javaClass.HEARTS;
	}
	public static get INTEGER(): RenderType {
		return this.$javaClass.INTEGER;
	}
}

