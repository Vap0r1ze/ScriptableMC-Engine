declare var Java: any;
import Color from './Color.js'
import ConfigurationSerializable from './configuration/serialization/ConfigurationSerializable.js'
import FireworkEffect$Builder from './FireworkEffect$Builder.js'
import FireworkEffect$Type from './FireworkEffect$Type.js'

export default interface FireworkEffect extends ConfigurationSerializable {
	getColors(): Array<Color>;
	getFadeColors(): Array<Color>;
	getType(): FireworkEffect$Type;
	hasFlicker(): boolean;
	hasTrail(): boolean;
	serialize(): any;
}

export default class FireworkEffect {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.FireworkEffect');
	}

	public static builder(): FireworkEffect$Builder;
	public static builder(...args: any[]): any {
		return FireworkEffect.$javaClass.builder(...args);
	}

	public static deserialize(map: any): ConfigurationSerializable;
	public static deserialize(...args: any[]): any {
		return FireworkEffect.$javaClass.deserialize(...args);
	}

}

