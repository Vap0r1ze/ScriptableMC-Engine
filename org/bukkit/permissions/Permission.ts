declare var Java: any;
import Class from '../../../java/lang/Class.js'
import List from '../../../java/util/List.js'
import Map from '../../../java/util/Map.js'
import Object from '../../../java/lang/Object.js'
import PermissionDefault from './PermissionDefault.js'
import Set from '../../../java/util/Set.js'
import String from '../../../java/lang/String.js'

export default interface Permission extends Object {
	addParent(perm: Permission, value: boolean): void;
	addParent(_name: string, value: boolean): Permission;
	getChildren(): Map;
	getDefault(): PermissionDefault;
	getDescription(): string;
	getName(): string;
	getPermissibles(): Set;
	recalculatePermissibles(): void;
	setDefault(value: PermissionDefault): void;
	setDescription(value: string): void;
}

export default class Permission {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.permissions.Permission');
	}
	public static $isInstance(obj: any): obj is Permission {
		return obj instanceof Permission.$javaClass;
	}

	constructor(_name: string);
	constructor(_name: string, description: string);
	constructor(_name: string, defaultValue: PermissionDefault);
	constructor(_name: string, children: Map);
	constructor(_name: string, defaultValue: PermissionDefault, children: Map);
	constructor(_name: string, description: string, children: Map);
	constructor(_name: string, description: string, defaultValue: PermissionDefault);
	constructor(_name: string, description: string, defaultValue: PermissionDefault, children: Map);
	constructor(...args: any[]) {
		return new Permission.$javaClass(...args);
	}

	public static get DEFAULT_PERMISSION(): PermissionDefault {
		return Permission.$javaClass.DEFAULT_PERMISSION;
	}

	public static loadPermission(_name: string, data: Map): Permission;
	public static loadPermission(_name: string, data: Map, def: PermissionDefault, output: Array<any>): Permission;
	public static loadPermission(...args: any[]): any {
		return Permission.$javaClass.loadPermission(...args);
	}

	public static loadPermissions(data: Map, error: string, def: PermissionDefault): Array<Permission>;
	public static loadPermissions(...args: any[]): any {
		return Permission.$javaClass.loadPermissions(...args);
	}

}

