declare var Java: any;
import Class from '../../java/lang/Class.js'
import Date from '../../java/util/Date.js'
import Object from '../../java/lang/Object.js'
import String from '../../java/lang/String.js'

export default interface Time extends Date {
	after(arg0: Date): boolean;
	before(arg0: Date): boolean;
	clone(): Object;
	compareTo(arg0: Date): number;
	compareTo(arg0: Object): number;
	getDate(): number;
	getDay(): number;
	getHours(): number;
	getMinutes(): number;
	getMonth(): number;
	getSeconds(): number;
	getTime(): number;
	getTimezoneOffset(): number;
	getYear(): number;
	setDate(arg0: number): void;
	setHours(arg0: number): void;
	setMinutes(arg0: number): void;
	setMonth(arg0: number): void;
	setSeconds(arg0: number): void;
	setTime(arg0: number): void;
	setYear(arg0: number): void;
	toGMTString(): string;
	toInstant(): any;
	toLocalTime(): any;
	toLocaleString(): string;
}

export default class Time {
	public static get $javaClass(): any {
		return Java.type('java.sql.Time');
	}
	public static $isInstance(obj: any): obj is Time {
		return obj instanceof Time.$javaClass;
	}

	constructor(arg0: number);
	constructor(arg0: number, arg1: number, arg2: number);
	constructor(...args: any[]) {
		return new Time.$javaClass(...args);
	}

	public static UTC(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;
	public static UTC(...args: any[]): any {
		return Time.$javaClass.UTC(...args);
	}

	public static from(arg0: any): Date;
	public static from(...args: any[]): any {
		return Time.$javaClass.from(...args);
	}

	public static parse(arg0: string): number;
	public static parse(...args: any[]): any {
		return Time.$javaClass.parse(...args);
	}

	public static valueOf(arg0: string): Time;
	public static valueOf(arg0: any): Time;
	public static valueOf(...args: any[]): any {
		return Time.$javaClass.valueOf(...args);
	}

}

