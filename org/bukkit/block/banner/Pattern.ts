declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import ConfigurationSerializable from '../../../../org/bukkit/configuration/serialization/ConfigurationSerializable.js'
import DyeColor from '../../../../org/bukkit/DyeColor.js'
import Map from '../../../../java/util/Map.js'
import Object from '../../../../java/lang/Object.js'
import PatternType from './PatternType.js'
import String from '../../../../java/lang/String.js'

export default interface Pattern extends Object, ConfigurationSerializable {
	getColor(): DyeColor;
	getPattern(): PatternType;
	serialize(): Map;
}

export default class Pattern {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.banner.Pattern');
	}
	public static $isInstance(obj: any): obj is Pattern {
		return obj instanceof Pattern.$javaClass;
	}

	constructor(map: Map);
	constructor(color: DyeColor, pattern: PatternType);
	constructor(...args: any[]) {
		return new Pattern.$javaClass(...args);
	}

}

