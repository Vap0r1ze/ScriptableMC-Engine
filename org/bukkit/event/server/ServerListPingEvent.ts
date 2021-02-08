declare var Java: any;
import CachedServerIcon from '../../../../org/bukkit/util/CachedServerIcon.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import ServerEvent from './ServerEvent.js'

export default interface ServerListPingEvent extends ServerEvent {
	forEach(arg0: any): void;
	getAddress(): any;
	getEventName(): string;
	getHandlers(): HandlerList;
	getMaxPlayers(): number;
	getMotd(): string;
	getNumPlayers(): number;
	isAsynchronous(): boolean;
	iterator(): any;
	setMaxPlayers(maxPlayers: number): void;
	setMotd(motd: string): void;
	setServerIcon(icon: CachedServerIcon): void;
	spliterator(): any;
}

export default class ServerListPingEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.server.ServerListPingEvent');
	}
	public static $isInstance(obj: any): obj is ServerListPingEvent {
		return obj instanceof ServerListPingEvent.$javaClass;
	}

	constructor(address: any, motd: string, numPlayers: number, maxPlayers: number);
	constructor(...args: any[]) {
		return new ServerListPingEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return ServerListPingEvent.$javaClass.getHandlerList(...args);
	}

}

