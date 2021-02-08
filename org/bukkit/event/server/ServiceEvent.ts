declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Object from '../../../../java/lang/Object.js'
import RegisteredServiceProvider from '../../../../org/bukkit/plugin/RegisteredServiceProvider.js'
import ServerEvent from './ServerEvent.js'
import String from '../../../../java/lang/String.js'

export default interface ServiceEvent extends ServerEvent {
	getEventName(): string;
	getHandlers(): HandlerList;
	getProvider(): RegisteredServiceProvider;
	isAsynchronous(): boolean;
}

export default class ServiceEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.server.ServiceEvent');
	}
	public static $isInstance(obj: any): obj is ServiceEvent {
		return obj instanceof ServiceEvent.$javaClass;
	}

	constructor(provider: RegisteredServiceProvider);
	constructor(...args: any[]) {
		return new ServiceEvent.$javaClass(...args);
	}

}

