declare var Java: any;
import Class from '../../../java/lang/Class.js'
import Event from '../../../org/bukkit/event/Event.js'
import EventExecutor from './EventExecutor.js'
import EventPriority from '../../../org/bukkit/event/EventPriority.js'
import File from '../../../java/io/File.js'
import Listener from '../../../org/bukkit/event/Listener.js'
import Object from '../../../java/lang/Object.js'
import Permissible from '../../../org/bukkit/permissions/Permissible.js'
import Permission from '../../../org/bukkit/permissions/Permission.js'
import Plugin from './Plugin.js'
import PluginDescriptionFile from './PluginDescriptionFile.js'
import PluginManager from './PluginManager.js'
import Server from '../../../org/bukkit/Server.js'
import Set from '../../../java/util/Set.js'
import SimpleCommandMap from '../../../org/bukkit/command/SimpleCommandMap.js'
import String from '../../../java/lang/String.js'

export default interface SimplePluginManager extends Object, PluginManager {
	addPermission(perm: Permission): void;
	addPermission(perm: Permission, dirty: boolean): void;
	callEvent(event: Event): void;
	clearPlugins(): void;
	dirtyPermissibles(): void;
	disablePlugin(plugin: Plugin): void;
	disablePlugins(): void;
	enablePlugin(plugin: Plugin): void;
	getDefaultPermSubscriptions(op: boolean): Set;
	getDefaultPermissions(op: boolean): Set;
	getPermission(_name: string): Permission;
	getPermissionSubscriptions(permission: string): Set;
	getPermissions(): Set;
	getPlugin(_name: string): Plugin;
	getPlugins(): Array<Plugin>;
	isPluginEnabled(_name: string): boolean;
	isPluginEnabled(plugin: Plugin): boolean;
	isTransitiveDepend(plugin: PluginDescriptionFile, depend: PluginDescriptionFile): boolean;
	loadPlugin(file: File): Plugin;
	loadPlugins(directory: File): Array<Plugin>;
	recalculatePermissionDefaults(perm: Permission): void;
	registerEvent(event: Class, listener: Listener, priority: EventPriority, executor: EventExecutor, plugin: Plugin): void;
	registerEvent(event: Class, listener: Listener, priority: EventPriority, executor: EventExecutor, plugin: Plugin, ignoreCancelled: boolean): void;
	registerEvents(listener: Listener, plugin: Plugin): void;
	registerInterface(loader: Class): void;
	removePermission(perm: Permission): void;
	removePermission(_name: string): void;
	subscribeToDefaultPerms(op: boolean, permissible: Permissible): void;
	subscribeToPermission(permission: string, permissible: Permissible): void;
	unsubscribeFromDefaultPerms(op: boolean, permissible: Permissible): void;
	unsubscribeFromPermission(permission: string, permissible: Permissible): void;
	useTimings(): boolean;
	useTimings(use: boolean): void;
}

export default class SimplePluginManager {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.plugin.SimplePluginManager');
	}
	public static $isInstance(obj: any): obj is SimplePluginManager {
		return obj instanceof SimplePluginManager.$javaClass;
	}

	constructor(instance: Server, commandMap: SimpleCommandMap);
	constructor(...args: any[]) {
		return new SimplePluginManager.$javaClass(...args);
	}

}

