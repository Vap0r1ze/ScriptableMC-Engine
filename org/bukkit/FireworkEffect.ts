declare var Java: any;
import Class from '../../java/lang/Class.js'
import Color from './Color.js'
import ConfigurationSerializable from './configuration/serialization/ConfigurationSerializable.js'
import FireworkEffect$Builder from './FireworkEffect$Builder.js'
import FireworkEffect$Type from './FireworkEffect$Type.js'
import List from '../../java/util/List.js'
import Map from '../../java/util/Map.js'
import Object from '../../java/lang/Object.js'
import String from '../../java/lang/String.js'

export default interface FireworkEffect extends Object, ConfigurationSerializable {
	getColors(): Array<Color>;
	getFadeColors(): Array<Color>;
	getType(): FireworkEffect$Type;
	hasFlicker(): boolean;
	hasTrail(): boolean;
	serialize(): Map;
}

export default class FireworkEffect {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.FireworkEffect');
	}
	public static $isInstance(obj: any): obj is FireworkEffect {
		return obj instanceof FireworkEffect.$javaClass;
	}

	public static builder(): FireworkEffect$Builder;
	public static builder(...args: any[]): any {
		return FireworkEffect.$javaClass.builder(...args);
	}

	public static deserialize(map: Map): ConfigurationSerializable;
	public static deserialize(...args: any[]): any {
		return FireworkEffect.$javaClass.deserialize(...args);
	}

}

