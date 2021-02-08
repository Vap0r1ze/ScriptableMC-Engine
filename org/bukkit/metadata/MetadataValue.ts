declare var Java: any;
import Object from '../../../java/lang/Object.js'
import Plugin from '../../../org/bukkit/plugin/Plugin.js'
import String from '../../../java/lang/String.js'

export default interface MetadataValue {
	asBoolean(): boolean;
	asByte(): number;
	asDouble(): number;
	asFloat(): number;
	asInt(): number;
	asLong(): number;
	asShort(): number;
	asString(): string;
	getOwningPlugin(): Plugin;
	invalidate(): void;
	value(): Object;
}

export default class MetadataValue {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.metadata.MetadataValue');
	}
	public static $isInstance(obj: any): obj is MetadataValue {
		return obj instanceof MetadataValue.$javaClass;
	}

}

