declare var Java: any;
import Class from '../../../java/lang/Class.js'
import Enum from '../../../java/lang/Enum.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'

export default interface Parrot$Variant extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
}

export default class Parrot$Variant {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.entity.Parrot$Variant');
	}
	public static $isInstance(obj: any): obj is Parrot$Variant {
		return obj instanceof Parrot$Variant.$javaClass;
	}

	public static get BLUE(): Parrot$Variant {
		return this.$javaClass.BLUE;
	}
	public static get CYAN(): Parrot$Variant {
		return this.$javaClass.CYAN;
	}
	public static get GRAY(): Parrot$Variant {
		return this.$javaClass.GRAY;
	}
	public static get GREEN(): Parrot$Variant {
		return this.$javaClass.GREEN;
	}
	public static get RED(): Parrot$Variant {
		return this.$javaClass.RED;
	}
}

