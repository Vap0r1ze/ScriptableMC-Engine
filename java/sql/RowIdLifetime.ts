declare var Java: any;
import Class from '../../java/lang/Class.js'
import Enum from '../../java/lang/Enum.js'
import Object from '../../java/lang/Object.js'
import String from '../../java/lang/String.js'

export default interface RowIdLifetime extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
}

export default class RowIdLifetime {
	public static get $javaClass(): any {
		return Java.type('java.sql.RowIdLifetime');
	}
	public static $isInstance(obj: any): obj is RowIdLifetime {
		return obj instanceof RowIdLifetime.$javaClass;
	}

	public static get ROWID_UNSUPPORTED(): RowIdLifetime {
		return this.$javaClass.ROWID_UNSUPPORTED;
	}
	public static get ROWID_VALID_FOREVER(): RowIdLifetime {
		return this.$javaClass.ROWID_VALID_FOREVER;
	}
	public static get ROWID_VALID_OTHER(): RowIdLifetime {
		return this.$javaClass.ROWID_VALID_OTHER;
	}
	public static get ROWID_VALID_SESSION(): RowIdLifetime {
		return this.$javaClass.ROWID_VALID_SESSION;
	}
	public static get ROWID_VALID_TRANSACTION(): RowIdLifetime {
		return this.$javaClass.ROWID_VALID_TRANSACTION;
	}
}

