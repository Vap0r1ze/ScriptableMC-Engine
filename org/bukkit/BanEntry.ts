declare var Java: any;
import Date from '../../java/util/Date.js'
import String from '../../java/lang/String.js'

export default interface BanEntry {
	getCreated(): Date;
	getExpiration(): Date;
	getReason(): string;
	getSource(): string;
	getTarget(): string;
	save(): void;
	setCreated(arg0: Date): void;
	setExpiration(arg0: Date): void;
	setReason(arg0: string): void;
	setSource(arg0: string): void;
}

export default class BanEntry {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.BanEntry');
	}
	public static $isInstance(obj: any): obj is BanEntry {
		return obj instanceof BanEntry.$javaClass;
	}

}

