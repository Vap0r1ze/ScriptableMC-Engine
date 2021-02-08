declare var Java: any;
import Permission from './Permission.js'
import PermissionAttachment from './PermissionAttachment.js'
import Plugin from '../../../org/bukkit/plugin/Plugin.js'
import ServerOperator from './ServerOperator.js'
import Set from '../../../java/util/Set.js'
import String from '../../../java/lang/String.js'

export default interface Permissible extends ServerOperator {
	addAttachment(arg0: Plugin): PermissionAttachment;
	addAttachment(arg0: Plugin, arg1: number): PermissionAttachment;
	addAttachment(arg0: Plugin, arg1: string, arg2: boolean): PermissionAttachment;
	addAttachment(arg0: Plugin, arg1: string, arg2: boolean, arg3: number): PermissionAttachment;
	getEffectivePermissions(): Set;
	hasPermission(arg0: Permission): boolean;
	hasPermission(arg0: string): boolean;
	isOp(): boolean;
	isPermissionSet(arg0: string): boolean;
	isPermissionSet(arg0: Permission): boolean;
	recalculatePermissions(): void;
	removeAttachment(arg0: PermissionAttachment): void;
	setOp(arg0: boolean): void;
}

export default class Permissible {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.permissions.Permissible');
	}
	public static $isInstance(obj: any): obj is Permissible {
		return obj instanceof Permissible.$javaClass;
	}

}

