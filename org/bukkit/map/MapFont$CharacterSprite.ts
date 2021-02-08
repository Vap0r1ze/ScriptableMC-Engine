declare var Java: any;
import Class from '../../../java/lang/Class.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'

export default interface MapFont$CharacterSprite extends Object {
	get(row: number, col: number): boolean;
	getHeight(): number;
	getWidth(): number;
}

export default class MapFont$CharacterSprite {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.map.MapFont$CharacterSprite');
	}
	public static $isInstance(obj: any): obj is MapFont$CharacterSprite {
		return obj instanceof MapFont$CharacterSprite.$javaClass;
	}

	constructor(width: number, height: number, data: Array<boolean>);
	constructor(...args: any[]) {
		return new MapFont$CharacterSprite.$javaClass(...args);
	}

}

