declare var Java: any;
import List from '../../../java/util/List.js'
import MetadataValue from './MetadataValue.js'
import Object from '../../../java/lang/Object.js'
import Plugin from '../../../org/bukkit/plugin/Plugin.js'
import String from '../../../java/lang/String.js'

export default interface MetadataStore {
	getMetadata(arg0: Object, arg1: string): Array<MetadataValue>;
	hasMetadata(arg0: Object, arg1: string): boolean;
	invalidateAll(arg0: Plugin): void;
	removeMetadata(arg0: Object, arg1: string, arg2: Plugin): void;
	setMetadata(arg0: Object, arg1: string, arg2: MetadataValue): void;
}

export default class MetadataStore {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.metadata.MetadataStore');
	}
	public static $isInstance(obj: any): obj is MetadataStore {
		return obj instanceof MetadataStore.$javaClass;
	}

}

