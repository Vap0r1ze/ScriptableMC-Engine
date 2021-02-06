declare var Java: any;

export default interface Date {
	after(arg0: any): boolean;
	before(arg0: any): boolean;
	clone(): any;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
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
	toLocalDate(): any;
	toLocaleString(): string;
}

export default class Date {
	public static get $javaClass(): any {
		return Java.type('java.sql.Date');
	}

	constructor(arg0: number);
	constructor(arg0: number, arg1: number, arg2: number);
	constructor(...args: any[]) {
		return new Date.$javaClass(...args);
	}

	public static UTC(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;
	public static UTC(...args: any[]): any {
		return Date.$javaClass.UTC(...args);
	}

	public static from(arg0: any): any;
	public static from(...args: any[]): any {
		return Date.$javaClass.from(...args);
	}

	public static parse(arg0: string): number;
	public static parse(...args: any[]): any {
		return Date.$javaClass.parse(...args);
	}

	public static valueOf(arg0: string): Date;
	public static valueOf(arg0: any): Date;
	public static valueOf(...args: any[]): any {
		return Date.$javaClass.valueOf(...args);
	}

}
