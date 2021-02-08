declare var Java: any;
import BanEntry from './BanEntry.js'
import Date from '../../java/util/Date.js'
import Set from '../../java/util/Set.js'
import String from '../../java/lang/String.js'

export default interface BanList {
	addBan(arg0: string, arg1: string, arg2: Date, arg3: string): BanEntry;
	getBanEntries(): Set;
	getBanEntry(arg0: string): BanEntry;
	isBanned(arg0: string): boolean;
	pardon(arg0: string): void;
}

export default class BanList {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.BanList');
	}
	public static $isInstance(obj: any): obj is BanList {
		return obj instanceof BanList.$javaClass;
	}

}

