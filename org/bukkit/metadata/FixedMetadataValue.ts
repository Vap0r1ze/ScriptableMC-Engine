declare var Java: any;
import Class from '../../../java/lang/Class.js'
import LazyMetadataValue from './LazyMetadataValue.js'
import Object from '../../../java/lang/Object.js'
import Plugin from '../../../org/bukkit/plugin/Plugin.js'
import String from '../../../java/lang/String.js'

export default interface FixedMetadataValue extends LazyMetadataValue {
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

export default class FixedMetadataValue {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.metadata.FixedMetadataValue');
	}
	public static $isInstance(obj: any): obj is FixedMetadataValue {
		return obj instanceof FixedMetadataValue.$javaClass;
	}

	constructor(owningPlugin: Plugin, value: Object);
	constructor(...args: any[]) {
		return new FixedMetadataValue.$javaClass(...args);
	}

}

