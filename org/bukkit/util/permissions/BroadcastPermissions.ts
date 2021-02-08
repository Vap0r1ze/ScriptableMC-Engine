declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import Object from '../../../../java/lang/Object.js'
import Permission from '../../../../org/bukkit/permissions/Permission.js'
import String from '../../../../java/lang/String.js'

export default class BroadcastPermissions {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.util.permissions.BroadcastPermissions');
	}
	public static $isInstance(obj: any): obj is BroadcastPermissions {
		return obj instanceof BroadcastPermissions.$javaClass;
	}

	public static registerPermissions(parent: Permission): Permission;
	public static registerPermissions(...args: any[]): any {
		return BroadcastPermissions.$javaClass.registerPermissions(...args);
	}

}

