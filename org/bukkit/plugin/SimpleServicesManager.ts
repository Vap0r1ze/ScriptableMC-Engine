declare var Java: any;
import Class from '../../../java/lang/Class.js'
import Collection from '../../../java/util/Collection.js'
import List from '../../../java/util/List.js'
import Object from '../../../java/lang/Object.js'
import Plugin from './Plugin.js'
import RegisteredServiceProvider from './RegisteredServiceProvider.js'
import ServicePriority from './ServicePriority.js'
import ServicesManager from './ServicesManager.js'
import Set from '../../../java/util/Set.js'
import String from '../../../java/lang/String.js'

export default interface SimpleServicesManager extends Object, ServicesManager {
	getKnownServices(): Array<any>;
	getKnownServices(): Set;
	getRegistration(service: Class): RegisteredServiceProvider;
	getRegistrations(service: Class): Array<any>;
	getRegistrations(service: Class): Array<any>;
	getRegistrations(plugin: Plugin): Array<any>;
	isProvidedFor(service: Class): boolean;
	load(service: Class): Object;
	register(service: Class, provider: Object, plugin: Plugin, priority: ServicePriority): void;
	unregister(provider: Object): void;
	unregister(service: Class, provider: Object): void;
	unregisterAll(plugin: Plugin): void;
}

export default class SimpleServicesManager {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.plugin.SimpleServicesManager');
	}
	public static $isInstance(obj: any): obj is SimpleServicesManager {
		return obj instanceof SimpleServicesManager.$javaClass;
	}

	constructor();
	constructor(...args: any[]) {
		return new SimpleServicesManager.$javaClass(...args);
	}

}

