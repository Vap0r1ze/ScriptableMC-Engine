declare var Java: any;
import Class from '../../java/lang/Class.js'
import Cloneable from '../../java/lang/Cloneable.js'
import Comparable from '../../java/lang/Comparable.js'
import Date from './Date.js'
import Locale from './Locale.js'
import Map from './Map.js'
import Object from '../../java/lang/Object.js'
import Serializable from '../../java/io/Serializable.js'
import Set from './Set.js'
import String from '../../java/lang/String.js'
import TimeZone from './TimeZone.js'

export default interface Calendar extends Object, Serializable, Cloneable, Comparable {
	add(arg0: number, arg1: number): void;
	after(arg0: Object): boolean;
	before(arg0: Object): boolean;
	clear(): void;
	clear(arg0: number): void;
	clone(): Object;
	compareTo(arg0: Object): number;
	compareTo(arg0: Calendar): number;
	get(arg0: number): number;
	getActualMaximum(arg0: number): number;
	getActualMinimum(arg0: number): number;
	getCalendarType(): string;
	getDisplayName(arg0: number, arg1: number, arg2: Locale): string;
	getDisplayNames(arg0: number, arg1: number, arg2: Locale): Map;
	getFirstDayOfWeek(): number;
	getGreatestMinimum(arg0: number): number;
	getLeastMaximum(arg0: number): number;
	getMaximum(arg0: number): number;
	getMinimalDaysInFirstWeek(): number;
	getMinimum(arg0: number): number;
	getTime(): Date;
	getTimeInMillis(): number;
	getTimeZone(): TimeZone;
	getWeekYear(): number;
	getWeeksInWeekYear(): number;
	isLenient(): boolean;
	isSet(arg0: number): boolean;
	isWeekDateSupported(): boolean;
	roll(arg0: number, arg1: number): void;
	roll(arg0: number, arg1: boolean): void;
	set(arg0: number, arg1: number): void;
	set(arg0: number, arg1: number, arg2: number): void;
	set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
	set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
	setFirstDayOfWeek(arg0: number): void;
	setLenient(arg0: boolean): void;
	setMinimalDaysInFirstWeek(arg0: number): void;
	setTime(arg0: Date): void;
	setTimeInMillis(arg0: number): void;
	setTimeZone(arg0: TimeZone): void;
	setWeekDate(arg0: number, arg1: number, arg2: number): void;
	toInstant(): any;
}

export default class Calendar {
	public static get $javaClass(): any {
		return Java.type('java.util.Calendar');
	}
	public static $isInstance(obj: any): obj is Calendar {
		return obj instanceof Calendar.$javaClass;
	}

	public static get ALL_STYLES(): number {
		return Calendar.$javaClass.ALL_STYLES;
	}

	public static get AM(): number {
		return Calendar.$javaClass.AM;
	}

	public static get AM_PM(): number {
		return Calendar.$javaClass.AM_PM;
	}

	public static get APRIL(): number {
		return Calendar.$javaClass.APRIL;
	}

	public static get AUGUST(): number {
		return Calendar.$javaClass.AUGUST;
	}

	public static get DATE(): number {
		return Calendar.$javaClass.DATE;
	}

	public static get DAY_OF_MONTH(): number {
		return Calendar.$javaClass.DAY_OF_MONTH;
	}

	public static get DAY_OF_WEEK(): number {
		return Calendar.$javaClass.DAY_OF_WEEK;
	}

	public static get DAY_OF_WEEK_IN_MONTH(): number {
		return Calendar.$javaClass.DAY_OF_WEEK_IN_MONTH;
	}

	public static get DAY_OF_YEAR(): number {
		return Calendar.$javaClass.DAY_OF_YEAR;
	}

	public static get DECEMBER(): number {
		return Calendar.$javaClass.DECEMBER;
	}

	public static get DST_OFFSET(): number {
		return Calendar.$javaClass.DST_OFFSET;
	}

	public static get ERA(): number {
		return Calendar.$javaClass.ERA;
	}

	public static get FEBRUARY(): number {
		return Calendar.$javaClass.FEBRUARY;
	}

	public static get FIELD_COUNT(): number {
		return Calendar.$javaClass.FIELD_COUNT;
	}

	public static get FRIDAY(): number {
		return Calendar.$javaClass.FRIDAY;
	}

	public static get HOUR(): number {
		return Calendar.$javaClass.HOUR;
	}

	public static get HOUR_OF_DAY(): number {
		return Calendar.$javaClass.HOUR_OF_DAY;
	}

	public static get JANUARY(): number {
		return Calendar.$javaClass.JANUARY;
	}

	public static get JULY(): number {
		return Calendar.$javaClass.JULY;
	}

	public static get JUNE(): number {
		return Calendar.$javaClass.JUNE;
	}

	public static get LONG(): number {
		return Calendar.$javaClass.LONG;
	}

	public static get LONG_FORMAT(): number {
		return Calendar.$javaClass.LONG_FORMAT;
	}

	public static get LONG_STANDALONE(): number {
		return Calendar.$javaClass.LONG_STANDALONE;
	}

	public static get MARCH(): number {
		return Calendar.$javaClass.MARCH;
	}

	public static get MAY(): number {
		return Calendar.$javaClass.MAY;
	}

	public static get MILLISECOND(): number {
		return Calendar.$javaClass.MILLISECOND;
	}

	public static get MINUTE(): number {
		return Calendar.$javaClass.MINUTE;
	}

	public static get MONDAY(): number {
		return Calendar.$javaClass.MONDAY;
	}

	public static get MONTH(): number {
		return Calendar.$javaClass.MONTH;
	}

	public static get NARROW_FORMAT(): number {
		return Calendar.$javaClass.NARROW_FORMAT;
	}

	public static get NARROW_STANDALONE(): number {
		return Calendar.$javaClass.NARROW_STANDALONE;
	}

	public static get NOVEMBER(): number {
		return Calendar.$javaClass.NOVEMBER;
	}

	public static get OCTOBER(): number {
		return Calendar.$javaClass.OCTOBER;
	}

	public static get PM(): number {
		return Calendar.$javaClass.PM;
	}

	public static get SATURDAY(): number {
		return Calendar.$javaClass.SATURDAY;
	}

	public static get SECOND(): number {
		return Calendar.$javaClass.SECOND;
	}

	public static get SEPTEMBER(): number {
		return Calendar.$javaClass.SEPTEMBER;
	}

	public static get SHORT(): number {
		return Calendar.$javaClass.SHORT;
	}

	public static get SHORT_FORMAT(): number {
		return Calendar.$javaClass.SHORT_FORMAT;
	}

	public static get SHORT_STANDALONE(): number {
		return Calendar.$javaClass.SHORT_STANDALONE;
	}

	public static get SUNDAY(): number {
		return Calendar.$javaClass.SUNDAY;
	}

	public static get THURSDAY(): number {
		return Calendar.$javaClass.THURSDAY;
	}

	public static get TUESDAY(): number {
		return Calendar.$javaClass.TUESDAY;
	}

	public static get UNDECIMBER(): number {
		return Calendar.$javaClass.UNDECIMBER;
	}

	public static get WEDNESDAY(): number {
		return Calendar.$javaClass.WEDNESDAY;
	}

	public static get WEEK_OF_MONTH(): number {
		return Calendar.$javaClass.WEEK_OF_MONTH;
	}

	public static get WEEK_OF_YEAR(): number {
		return Calendar.$javaClass.WEEK_OF_YEAR;
	}

	public static get YEAR(): number {
		return Calendar.$javaClass.YEAR;
	}

	public static get ZONE_OFFSET(): number {
		return Calendar.$javaClass.ZONE_OFFSET;
	}

	public static getAvailableCalendarTypes(): Set;
	public static getAvailableCalendarTypes(...args: any[]): any {
		return Calendar.$javaClass.getAvailableCalendarTypes(...args);
	}

	public static getAvailableLocales(): Array<Locale>;
	public static getAvailableLocales(...args: any[]): any {
		return Calendar.$javaClass.getAvailableLocales(...args);
	}

	public static getInstance(): Calendar;
	public static getInstance(arg0: TimeZone): Calendar;
	public static getInstance(arg0: Locale): Calendar;
	public static getInstance(arg0: TimeZone, arg1: Locale): Calendar;
	public static getInstance(...args: any[]): any {
		return Calendar.$javaClass.getInstance(...args);
	}

}

