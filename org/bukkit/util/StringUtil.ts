declare var Java: any;
import Class from '../../../java/lang/Class.js'
import Collection from '../../../java/util/Collection.js'
import Iterable from '../../../java/lang/Iterable.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'

export default class StringUtil {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.util.StringUtil');
	}
	public static $isInstance(obj: any): obj is StringUtil {
		return obj instanceof StringUtil.$javaClass;
	}

	constructor();
	constructor(...args: any[]) {
		return new StringUtil.$javaClass(...args);
	}

	public static copyPartialMatches(token: string, originals: Iterable, collection: Array<any>): Array<any>;
	public static copyPartialMatches(...args: any[]): any {
		return StringUtil.$javaClass.copyPartialMatches(...args);
	}

	public static startsWithIgnoreCase(string: string, prefix: string): boolean;
	public static startsWithIgnoreCase(...args: any[]): any {
		return StringUtil.$javaClass.startsWithIgnoreCase(...args);
	}

}

