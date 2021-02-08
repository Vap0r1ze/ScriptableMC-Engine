declare var Java: any;
import Class from '../../java/lang/Class.js'
import Cloneable from '../../java/lang/Cloneable.js'
import Date from './Date.js'
import Locale from './Locale.js'
import Object from '../../java/lang/Object.js'
import Serializable from '../../java/io/Serializable.js'
import String from '../../java/lang/String.js'

export default interface TimeZone extends Object, Serializable, Cloneable {
	clone(): Object;
	getDSTSavings(): number;
	getDisplayName(): string;
	getDisplayName(arg0: Locale): string;
	getDisplayName(arg0: boolean, arg1: number): string;
	getDisplayName(arg0: boolean, arg1: number, arg2: Locale): string;
	getID(): string;
	getOffset(arg0: number): number;
	getOffset(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;
	getRawOffset(): number;
	hasSameRules(arg0: TimeZone): boolean;
	inDaylightTime(arg0: Date): boolean;
	observesDaylightTime(): boolean;
	setID(arg0: string): void;
	setRawOffset(arg0: number): void;
	toZoneId(): any;
	useDaylightTime(): boolean;
}

export default class TimeZone {
	public static get $javaClass(): any {
		return Java.type('java.util.TimeZone');
	}
	public static $isInstance(obj: any): obj is TimeZone {
		return obj instanceof TimeZone.$javaClass;
	}

	constructor();
	constructor(...args: any[]) {
		return new TimeZone.$javaClass(...args);
	}

	public static get LONG(): number {
		return TimeZone.$javaClass.LONG;
	}

	public static get SHORT(): number {
		return TimeZone.$javaClass.SHORT;
	}

	public static getAvailableIDs(): Array<string>;
	public static getAvailableIDs(arg0: number): Array<string>;
	public static getAvailableIDs(...args: any[]): any {
		return TimeZone.$javaClass.getAvailableIDs(...args);
	}

	public static getDefault(): TimeZone;
	public static getDefault(...args: any[]): any {
		return TimeZone.$javaClass.getDefault(...args);
	}

	public static getTimeZone(arg0: string): TimeZone;
	public static getTimeZone(arg0: any): TimeZone;
	public static getTimeZone(...args: any[]): any {
		return TimeZone.$javaClass.getTimeZone(...args);
	}

	public static setDefault(arg0: TimeZone): void;
	public static setDefault(...args: any[]): any {
		return TimeZone.$javaClass.setDefault(...args);
	}

}

