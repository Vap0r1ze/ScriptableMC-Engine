declare var Java: any;
import Class from '../../../java/lang/Class.js'
import Enum from '../../../java/lang/Enum.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'

export default interface Horse$Style extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
}

export default class Horse$Style {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.entity.Horse$Style');
	}
	public static $isInstance(obj: any): obj is Horse$Style {
		return obj instanceof Horse$Style.$javaClass;
	}

	public static get BLACK_DOTS(): Horse$Style {
		return this.$javaClass.BLACK_DOTS;
	}
	public static get NONE(): Horse$Style {
		return this.$javaClass.NONE;
	}
	public static get WHITE(): Horse$Style {
		return this.$javaClass.WHITE;
	}
	public static get WHITEFIELD(): Horse$Style {
		return this.$javaClass.WHITEFIELD;
	}
	public static get WHITE_DOTS(): Horse$Style {
		return this.$javaClass.WHITE_DOTS;
	}
}

