declare var Java: any;
import Class from '../../../java/lang/Class.js'
import Enum from '../../../java/lang/Enum.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'

export default interface PermissionDefault extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	getValue(op: boolean): boolean;
	name(): string;
	ordinal(): number;
}

export default class PermissionDefault {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.permissions.PermissionDefault');
	}
	public static $isInstance(obj: any): obj is PermissionDefault {
		return obj instanceof PermissionDefault.$javaClass;
	}

	public static get FALSE(): PermissionDefault {
		return this.$javaClass.FALSE;
	}
	public static get NOT_OP(): PermissionDefault {
		return this.$javaClass.NOT_OP;
	}
	public static get OP(): PermissionDefault {
		return this.$javaClass.OP;
	}
	public static get TRUE(): PermissionDefault {
		return this.$javaClass.TRUE;
	}
}

