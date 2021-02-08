declare var Java: any;
import Class from '../../../java/lang/Class.js'
import MapCursor from './MapCursor.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'

export default interface MapCursorCollection extends Object {
	addCursor(cursor: MapCursor): MapCursor;
	addCursor(x: number, y: number, direction: number): MapCursor;
	addCursor(x: number, y: number, direction: number, type: number): MapCursor;
	addCursor(x: number, y: number, direction: number, type: number, visible: boolean): MapCursor;
	addCursor(x: number, y: number, direction: number, type: number, visible: boolean, caption: string): MapCursor;
	getCursor(index: number): MapCursor;
	removeCursor(cursor: MapCursor): boolean;
	size(): number;
}

export default class MapCursorCollection {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.map.MapCursorCollection');
	}
	public static $isInstance(obj: any): obj is MapCursorCollection {
		return obj instanceof MapCursorCollection.$javaClass;
	}

	constructor();
	constructor(...args: any[]) {
		return new MapCursorCollection.$javaClass(...args);
	}

}

