declare var Java: any;
import Class from '../../../java/lang/Class.js'
import MapCanvas from './MapCanvas.js'
import MapView from './MapView.js'
import Object from '../../../java/lang/Object.js'
import Player from '../../../org/bukkit/entity/Player.js'
import String from '../../../java/lang/String.js'

export default interface MapRenderer extends Object {
	initialize(map: MapView): void;
	isContextual(): boolean;
	render(arg0: MapView, arg1: MapCanvas, arg2: Player): void;
}

export default class MapRenderer {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.map.MapRenderer');
	}
	public static $isInstance(obj: any): obj is MapRenderer {
		return obj instanceof MapRenderer.$javaClass;
	}

	constructor();
	constructor(contextual: boolean);
	constructor(...args: any[]) {
		return new MapRenderer.$javaClass(...args);
	}

}

