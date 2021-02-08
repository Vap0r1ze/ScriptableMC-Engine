declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import Object from '../../../../java/lang/Object.js'
import Permission from '../../../../org/bukkit/permissions/Permission.js'
import String from '../../../../java/lang/String.js'

export default class CommandPermissions {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.util.permissions.CommandPermissions');
	}
	public static $isInstance(obj: any): obj is CommandPermissions {
		return obj instanceof CommandPermissions.$javaClass;
	}

	public static registerPermissions(parent: Permission): Permission;
	public static registerPermissions(...args: any[]): any {
		return CommandPermissions.$javaClass.registerPermissions(...args);
	}

}

