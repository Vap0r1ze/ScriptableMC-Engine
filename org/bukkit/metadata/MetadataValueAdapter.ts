declare var Java: any;
import Class from '../../../java/lang/Class.js'
import MetadataValue from './MetadataValue.js'
import Object from '../../../java/lang/Object.js'
import Plugin from '../../../org/bukkit/plugin/Plugin.js'
import String from '../../../java/lang/String.js'

export default interface MetadataValueAdapter extends Object, MetadataValue {
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

export default class MetadataValueAdapter {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.metadata.MetadataValueAdapter');
	}
	public static $isInstance(obj: any): obj is MetadataValueAdapter {
		return obj instanceof MetadataValueAdapter.$javaClass;
	}

}

