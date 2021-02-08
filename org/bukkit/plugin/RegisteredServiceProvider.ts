declare var Java: any;
import Class from '../../../java/lang/Class.js'
import Comparable from '../../../java/lang/Comparable.js'
import Object from '../../../java/lang/Object.js'
import Plugin from './Plugin.js'
import ServicePriority from './ServicePriority.js'
import String from '../../../java/lang/String.js'

export default interface RegisteredServiceProvider extends Object, Comparable {
	compareTo(other: RegisteredServiceProvider): number;
	compareTo(arg0: Object): number;
	getPlugin(): Plugin;
	getPriority(): ServicePriority;
	getProvider(): Object;
	getService(): Class;
}

export default class RegisteredServiceProvider {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.plugin.RegisteredServiceProvider');
	}
	public static $isInstance(obj: any): obj is RegisteredServiceProvider {
		return obj instanceof RegisteredServiceProvider.$javaClass;
	}

	constructor(service: Class, provider: Object, priority: ServicePriority, plugin: Plugin);
	constructor(...args: any[]) {
		return new RegisteredServiceProvider.$javaClass(...args);
	}

}

