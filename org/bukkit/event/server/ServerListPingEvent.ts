declare var Java: any;
import CachedServerIcon from '../../../../org/bukkit/util/CachedServerIcon.js'
import Class from '../../../../java/lang/Class.js'
import Consumer from '../../../../java/util/function/Consumer.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Iterable from '../../../../java/lang/Iterable.js'
import Iterator from '../../../../java/util/Iterator.js'
import Object from '../../../../java/lang/Object.js'
import ServerEvent from './ServerEvent.js'
import Spliterator from '../../../../java/util/Spliterator.js'
import String from '../../../../java/lang/String.js'

export default interface ServerListPingEvent extends ServerEvent, Iterable {
	forEach(arg0: Consumer): void;
	getAddress(): any;
	getEventName(): string;
	getHandlers(): HandlerList;
	getMaxPlayers(): number;
	getMotd(): string;
	getNumPlayers(): number;
	isAsynchronous(): boolean;
	iterator(): Iterator;
	setMaxPlayers(maxPlayers: number): void;
	setMotd(motd: string): void;
	setServerIcon(icon: CachedServerIcon): void;
	spliterator(): Spliterator;
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

