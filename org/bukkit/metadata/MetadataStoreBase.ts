declare var Java: any;
import Class from '../../../java/lang/Class.js'
import List from '../../../java/util/List.js'
import MetadataValue from './MetadataValue.js'
import Object from '../../../java/lang/Object.js'
import Plugin from '../../../org/bukkit/plugin/Plugin.js'
import String from '../../../java/lang/String.js'

export default interface MetadataStoreBase extends Object {
	getMetadata(subject: Object, metadataKey: string): Array<MetadataValue>;
	hasMetadata(subject: Object, metadataKey: string): boolean;
	invalidateAll(owningPlugin: Plugin): void;
	removeMetadata(subject: Object, metadataKey: string, owningPlugin: Plugin): void;
	setMetadata(subject: Object, metadataKey: string, newMetadataValue: MetadataValue): void;
}

export default class MetadataStoreBase {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.metadata.MetadataStoreBase');
	}
	public static $isInstance(obj: any): obj is MetadataStoreBase {
		return obj instanceof MetadataStoreBase.$javaClass;
	}

	constructor();
	constructor(...args: any[]) {
		return new MetadataStoreBase.$javaClass(...args);
	}

}

