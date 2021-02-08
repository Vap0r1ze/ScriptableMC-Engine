declare var Java: any;
import Class from '../../../java/lang/Class.js'
import Enum from '../../../java/lang/Enum.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'

export default interface Llama$Color extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
}

export default class Llama$Color {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.entity.Llama$Color');
	}
	public static $isInstance(obj: any): obj is Llama$Color {
		return obj instanceof Llama$Color.$javaClass;
	}

	public static get BROWN(): Llama$Color {
		return this.$javaClass.BROWN;
	}
	public static get CREAMY(): Llama$Color {
		return this.$javaClass.CREAMY;
	}
	public static get GRAY(): Llama$Color {
		return this.$javaClass.GRAY;
	}
	public static get WHITE(): Llama$Color {
		return this.$javaClass.WHITE;
	}
}

