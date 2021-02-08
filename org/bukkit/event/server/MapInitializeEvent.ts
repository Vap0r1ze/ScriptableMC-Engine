declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import MapView from '../../../../org/bukkit/map/MapView.js'
import Object from '../../../../java/lang/Object.js'
import ServerEvent from './ServerEvent.js'
import String from '../../../../java/lang/String.js'

export default interface MapInitializeEvent extends ServerEvent {
	getEventName(): string;
	getHandlers(): HandlerList;
	getMap(): MapView;
	isAsynchronous(): boolean;
}

export default class MapInitializeEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.server.MapInitializeEvent');
	}
	public static $isInstance(obj: any): obj is MapInitializeEvent {
		return obj instanceof MapInitializeEvent.$javaClass;
	}

	constructor(mapView: MapView);
	constructor(...args: any[]) {
		return new MapInitializeEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return MapInitializeEvent.$javaClass.getHandlerList(...args);
	}

}

