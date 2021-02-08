declare var Java: any;
import Class from '../../../java/lang/Class.js'
import Collection from '../../../java/util/Collection.js'
import List from '../../../java/util/List.js'
import Object from '../../../java/lang/Object.js'
import Plugin from './Plugin.js'
import RegisteredServiceProvider from './RegisteredServiceProvider.js'
import ServicePriority from './ServicePriority.js'

export default interface ServicesManager {
	getKnownServices(): Array<any>;
	getRegistration(arg0: Class): RegisteredServiceProvider;
	getRegistrations(arg0: Class): Array<any>;
	getRegistrations(arg0: Plugin): Array<any>;
	isProvidedFor(arg0: Class): boolean;
	load(arg0: Class): Object;
	register(arg0: Class, arg1: Object, arg2: Plugin, arg3: ServicePriority): void;
	unregister(arg0: Object): void;
	unregister(arg0: Class, arg1: Object): void;
	unregisterAll(arg0: Plugin): void;
}

export default class ServicesManager {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.plugin.ServicesManager');
	}
	public static $isInstance(obj: any): obj is ServicesManager {
		return obj instanceof ServicesManager.$javaClass;
	}

}

