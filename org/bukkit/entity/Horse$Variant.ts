declare var Java: any;
import Class from '../../../java/lang/Class.js'
import Enum from '../../../java/lang/Enum.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'

export default interface Horse$Variant extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
}

export default class Horse$Variant {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.entity.Horse$Variant');
	}
	public static $isInstance(obj: any): obj is Horse$Variant {
		return obj instanceof Horse$Variant.$javaClass;
	}

	public static get DONKEY(): Horse$Variant {
		return this.$javaClass.DONKEY;
	}
	public static get HORSE(): Horse$Variant {
		return this.$javaClass.HORSE;
	}
	public static get LLAMA(): Horse$Variant {
		return this.$javaClass.LLAMA;
	}
	public static get MULE(): Horse$Variant {
		return this.$javaClass.MULE;
	}
	public static get SKELETON_HORSE(): Horse$Variant {
		return this.$javaClass.SKELETON_HORSE;
	}
	public static get UNDEAD_HORSE(): Horse$Variant {
		return this.$javaClass.UNDEAD_HORSE;
	}
}

