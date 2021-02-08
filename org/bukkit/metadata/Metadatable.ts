declare var Java: any;
import List from '../../../java/util/List.js'
import MetadataValue from './MetadataValue.js'
import Plugin from '../../../org/bukkit/plugin/Plugin.js'
import String from '../../../java/lang/String.js'

export default interface Metadatable {
	getMetadata(arg0: string): Array<MetadataValue>;
	hasMetadata(arg0: string): boolean;
	removeMetadata(arg0: string, arg1: Plugin): void;
	setMetadata(arg0: string, arg1: MetadataValue): void;
}

export default class Metadatable {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.metadata.Metadatable');
	}
	public static $isInstance(obj: any): obj is Metadatable {
		return obj instanceof Metadatable.$javaClass;
	}

}

