declare var Java: any;
import Class from '../../../java/lang/Class.js'
import Enum from '../../../java/lang/Enum.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'

export default interface Horse$Color extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
}

export default class Horse$Color {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.entity.Horse$Color');
	}
	public static $isInstance(obj: any): obj is Horse$Color {
		return obj instanceof Horse$Color.$javaClass;
	}

	public static get BLACK(): Horse$Color {
		return this.$javaClass.BLACK;
	}
	public static get BROWN(): Horse$Color {
		return this.$javaClass.BROWN;
	}
	public static get CHESTNUT(): Horse$Color {
		return this.$javaClass.CHESTNUT;
	}
	public static get CREAMY(): Horse$Color {
		return this.$javaClass.CREAMY;
	}
	public static get DARK_BROWN(): Horse$Color {
		return this.$javaClass.DARK_BROWN;
	}
	public static get GRAY(): Horse$Color {
		return this.$javaClass.GRAY;
	}
	public static get WHITE(): Horse$Color {
		return this.$javaClass.WHITE;
	}
}

