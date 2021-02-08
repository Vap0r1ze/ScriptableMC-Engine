declare var Java: any;
import Class from '../../../java/lang/Class.js'
import MapCursor$Type from './MapCursor$Type.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'

export default interface MapCursor extends Object {
	getCaption(): string;
	getDirection(): number;
	getRawType(): number;
	getType(): MapCursor$Type;
	getX(): number;
	getY(): number;
	isVisible(): boolean;
	setCaption(caption: string): void;
	setDirection(direction: number): void;
	setRawType(type: number): void;
	setType(type: MapCursor$Type): void;
	setVisible(visible: boolean): void;
	setX(x: number): void;
	setY(y: number): void;
}

export default class MapCursor {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.map.MapCursor');
	}
	public static $isInstance(obj: any): obj is MapCursor {
		return obj instanceof MapCursor.$javaClass;
	}

	constructor(x: number, y: number, direction: number, type: MapCursor$Type, visible: boolean);
	constructor(x: number, y: number, direction: number, type: number, visible: boolean);
	constructor(x: number, y: number, direction: number, type: number, visible: boolean, caption: string);
	constructor(x: number, y: number, direction: number, type: MapCursor$Type, visible: boolean, caption: string);
	constructor(...args: any[]) {
		return new MapCursor.$javaClass(...args);
	}

}

