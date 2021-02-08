declare var Java: any;
import Class from '../../../java/lang/Class.js'
import MapFont$CharacterSprite from './MapFont$CharacterSprite.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'

export default interface MapFont extends Object {
	getChar(ch: string): MapFont$CharacterSprite;
	getHeight(): number;
	getWidth(text: string): number;
	isValid(text: string): boolean;
	setChar(ch: string, sprite: MapFont$CharacterSprite): void;
}

export default class MapFont {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.map.MapFont');
	}
	public static $isInstance(obj: any): obj is MapFont {
		return obj instanceof MapFont.$javaClass;
	}

	constructor();
	constructor(...args: any[]) {
		return new MapFont.$javaClass(...args);
	}

}

