declare var Java: any;
import Class from '../../../java/lang/Class.js'
import Event from '../../../org/bukkit/event/Event.js'
import EventExecutor from './EventExecutor.js'
import EventPriority from '../../../org/bukkit/event/EventPriority.js'
import File from '../../../java/io/File.js'
import Listener from '../../../org/bukkit/event/Listener.js'
import Permissible from '../../../org/bukkit/permissions/Permissible.js'
import Permission from '../../../org/bukkit/permissions/Permission.js'
import Plugin from './Plugin.js'
import Set from '../../../java/util/Set.js'
import String from '../../../java/lang/String.js'

export default interface PluginManager {
	addPermission(arg0: Permission): void;
	callEvent(arg0: Event): void;
	clearPlugins(): void;
	disablePlugin(arg0: Plugin): void;
	disablePlugins(): void;
	enablePlugin(arg0: Plugin): void;
	getDefaultPermSubscriptions(arg0: boolean): Set;
	getDefaultPermissions(arg0: boolean): Set;
	getPermission(arg0: string): Permission;
	getPermissionSubscriptions(arg0: string): Set;
	getPermissions(): Set;
	getPlugin(arg0: string): Plugin;
	getPlugins(): Array<Plugin>;
	isPluginEnabled(arg0: string): boolean;
	isPluginEnabled(arg0: Plugin): boolean;
	loadPlugin(arg0: File): Plugin;
	loadPlugins(arg0: File): Array<Plugin>;
	recalculatePermissionDefaults(arg0: Permission): void;
	registerEvent(arg0: Class, arg1: Listener, arg2: EventPriority, arg3: EventExecutor, arg4: Plugin): void;
	registerEvent(arg0: Class, arg1: Listener, arg2: EventPriority, arg3: EventExecutor, arg4: Plugin, arg5: boolean): void;
	registerEvents(arg0: Listener, arg1: Plugin): void;
	registerInterface(arg0: Class): void;
	removePermission(arg0: Permission): void;
	removePermission(arg0: string): void;
	subscribeToDefaultPerms(arg0: boolean, arg1: Permissible): void;
	subscribeToPermission(arg0: string, arg1: Permissible): void;
	unsubscribeFromDefaultPerms(arg0: boolean, arg1: Permissible): void;
	unsubscribeFromPermission(arg0: string, arg1: Permissible): void;
	useTimings(): boolean;
}

export default class PluginManager {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.plugin.PluginManager');
	}
	public static $isInstance(obj: any): obj is PluginManager {
		return obj instanceof PluginManager.$javaClass;
	}

}

