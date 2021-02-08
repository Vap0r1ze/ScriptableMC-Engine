declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import Enum from '../../../../java/lang/Enum.js'
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'

export default interface BookMeta$Generation extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
}

export default class BookMeta$Generation {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.meta.BookMeta$Generation');
	}
	public static $isInstance(obj: any): obj is BookMeta$Generation {
		return obj instanceof BookMeta$Generation.$javaClass;
	}

	public static get COPY_OF_COPY(): BookMeta$Generation {
		return this.$javaClass.COPY_OF_COPY;
	}
	public static get COPY_OF_ORIGINAL(): BookMeta$Generation {
		return this.$javaClass.COPY_OF_ORIGINAL;
	}
	public static get ORIGINAL(): BookMeta$Generation {
		return this.$javaClass.ORIGINAL;
	}
	public static get TATTERED(): BookMeta$Generation {
		return this.$javaClass.TATTERED;
	}
}

