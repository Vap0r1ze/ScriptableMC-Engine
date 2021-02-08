declare var Java: any;
import Callable from '../../../java/util/concurrent/Callable.js'
import Class from '../../../java/lang/Class.js'
import LazyMetadataValue$CacheStrategy from './LazyMetadataValue$CacheStrategy.js'
import MetadataValueAdapter from './MetadataValueAdapter.js'
import Object from '../../../java/lang/Object.js'
import Plugin from '../../../org/bukkit/plugin/Plugin.js'
import String from '../../../java/lang/String.js'

export default interface LazyMetadataValue extends MetadataValueAdapter {
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

export default class LazyMetadataValue {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.metadata.LazyMetadataValue');
	}
	public static $isInstance(obj: any): obj is LazyMetadataValue {
		return obj instanceof LazyMetadataValue.$javaClass;
	}

	constructor(owningPlugin: Plugin, lazyValue: Callable);
	constructor(owningPlugin: Plugin, cacheStrategy: LazyMetadataValue$CacheStrategy, lazyValue: Callable);
	constructor(...args: any[]) {
		return new LazyMetadataValue.$javaClass(...args);
	}

}

