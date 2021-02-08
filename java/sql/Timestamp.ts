declare var Java: any;

export default interface Timestamp {
	after(arg0: Timestamp): boolean;
	after(arg0: any): boolean;
	before(arg0: Timestamp): boolean;
	before(arg0: any): boolean;
	clone(): any;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	compareTo(arg0: Timestamp): number;
	getDate(): number;
	getDay(): number;
	getHours(): number;
	getMinutes(): number;
	getMonth(): number;
	getNanos(): number;
	getSeconds(): number;
	getTime(): number;
	getTimezoneOffset(): number;
	getYear(): number;
	setDate(arg0: number): void;
	setHours(arg0: number): void;
	setMinutes(arg0: number): void;
	setMonth(arg0: number): void;
	setNanos(arg0: number): void;
	setSeconds(arg0: number): void;
	setTime(arg0: number): void;
	setYear(arg0: number): void;
	toGMTString(): string;
	toInstant(): any;
	toLocalDateTime(): any;
	toLocaleString(): string;
}

export default class Timestamp {
	public static get $javaClass(): any {
		return Java.type('java.sql.Timestamp');
	}
	public static $isInstance(obj: any): obj is Timestamp {
		return obj instanceof Timestamp.$javaClass;
	}

	constructor(arg0: number);
	constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number);
	constructor(...args: any[]) {
		return new Timestamp.$javaClass(...args);
	}

	public static UTC(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;
	public static UTC(...args: any[]): any {
		return Timestamp.$javaClass.UTC(...args);
	}

	public static from(arg0: any): Timestamp;
	public static from(arg0: any): any;
	public static from(...args: any[]): any {
		return Timestamp.$javaClass.from(...args);
	}

	public static parse(arg0: string): number;
	public static parse(...args: any[]): any {
		return Timestamp.$javaClass.parse(...args);
	}

	public static valueOf(arg0: string): Timestamp;
	public static valueOf(arg0: any): Timestamp;
	public static valueOf(...args: any[]): any {
		return Timestamp.$javaClass.valueOf(...args);
	}

}

