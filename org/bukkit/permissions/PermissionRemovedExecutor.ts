declare var Java: any;
import PermissionAttachment from './PermissionAttachment.js'

export default interface PermissionRemovedExecutor {
	attachmentRemoved(arg0: PermissionAttachment): void;
}

export default class PermissionRemovedExecutor {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.permissions.PermissionRemovedExecutor');
	}
	public static $isInstance(obj: any): obj is PermissionRemovedExecutor {
		return obj instanceof PermissionRemovedExecutor.$javaClass;
	}

}

