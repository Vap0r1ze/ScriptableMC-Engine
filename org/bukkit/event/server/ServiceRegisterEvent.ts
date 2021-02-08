declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Object from '../../../../java/lang/Object.js'
import RegisteredServiceProvider from '../../../../org/bukkit/plugin/RegisteredServiceProvider.js'
import ServiceEvent from './ServiceEvent.js'
import String from '../../../../java/lang/String.js'

export default interface ServiceRegisterEvent extends ServiceEvent {
	getEventName(): string;
	getHandlers(): HandlerList;
	getProvider(): RegisteredServiceProvider;
	isAsynchronous(): boolean;
}

export default class ServiceRegisterEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.server.ServiceRegisterEvent');
	}
	public static $isInstance(obj: any): obj is ServiceRegisterEvent {
		return obj instanceof ServiceRegisterEvent.$javaClass;
	}

	constructor(registeredProvider: RegisteredServiceProvider);
	constructor(...args: any[]) {
		return new ServiceRegisterEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return ServiceRegisterEvent.$javaClass.getHandlerList(...args);
	}

}

