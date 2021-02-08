declare var Java: any;
import Class from '../../../java/lang/Class.js'
import Map from '../../../java/util/Map.js'
import Object from '../../../java/lang/Object.js'
import Permissible from './Permissible.js'
import Permission from './Permission.js'
import PermissionRemovedExecutor from './PermissionRemovedExecutor.js'
import Plugin from '../../../org/bukkit/plugin/Plugin.js'
import String from '../../../java/lang/String.js'

export default interface PermissionAttachment extends Object {
	getPermissible(): Permissible;
	getPermissions(): Map;
	getPlugin(): Plugin;
	getRemovalCallback(): PermissionRemovedExecutor;
	remove(): boolean;
	setPermission(_name: string, value: boolean): void;
	setPermission(perm: Permission, value: boolean): void;
	setRemovalCallback(ex: PermissionRemovedExecutor): void;
	unsetPermission(perm: Permission): void;
	unsetPermission(_name: string): void;
}

export default class PermissionAttachment {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.permissions.PermissionAttachment');
	}
	public static $isInstance(obj: any): obj is PermissionAttachment {
		return obj instanceof PermissionAttachment.$javaClass;
	}

	constructor(plugin: Plugin, permissible: Permissible);
	constructor(...args: any[]) {
		return new PermissionAttachment.$javaClass(...args);
	}

}

