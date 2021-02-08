declare var Java: any;
import Class from '../../../java/lang/Class.js'
import Object from '../../../java/lang/Object.js'
import Permissible from './Permissible.js'
import PermissionAttachment from './PermissionAttachment.js'
import String from '../../../java/lang/String.js'

export default interface PermissionAttachmentInfo extends Object {
	getAttachment(): PermissionAttachment;
	getPermissible(): Permissible;
	getPermission(): string;
	getValue(): boolean;
}

export default class PermissionAttachmentInfo {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.permissions.PermissionAttachmentInfo');
	}
	public static $isInstance(obj: any): obj is PermissionAttachmentInfo {
		return obj instanceof PermissionAttachmentInfo.$javaClass;
	}

	constructor(permissible: Permissible, permission: string, attachment: PermissionAttachment, value: boolean);
	constructor(...args: any[]) {
		return new PermissionAttachmentInfo.$javaClass(...args);
	}

}

