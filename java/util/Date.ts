declare var Java: any;
import Class from '../../java/lang/Class.js'
import Cloneable from '../../java/lang/Cloneable.js'
import Comparable from '../../java/lang/Comparable.js'
import Object from '../../java/lang/Object.js'
import Serializable from '../../java/io/Serializable.js'
import String from '../../java/lang/String.js'

export default interface Date extends Object, Serializable, Cloneable, Comparable {
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
	toLocaleString(): string;
}

export default class Date {
	public static get $javaClass(): any {
		return Java.type('java.util.Date');
	}
	public static $isInstance(obj: any): obj is Date {
		return obj instanceof Date.$javaClass;
	}

	constructor();
	constructor(arg0: number);
	constructor(arg0: string);
	constructor(arg0: number, arg1: number, arg2: number);
	constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number);
	constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number);
	constructor(...args: any[]) {
		return new Date.$javaClass(...args);
	}

	public static UTC(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;
	public static UTC(...args: any[]): any {
		return Date.$javaClass.UTC(...args);
	}

	public static from(arg0: any): Date;
	public static from(...args: any[]): any {
		return Date.$javaClass.from(...args);
	}

	public static parse(arg0: string): number;
	public static parse(...args: any[]): any {
		return Date.$javaClass.parse(...args);
	}

}

