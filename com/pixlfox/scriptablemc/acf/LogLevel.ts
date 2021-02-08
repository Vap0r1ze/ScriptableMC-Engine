declare var Java: any;

export default interface LogLevel {
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class LogLevel {
	public static get $javaClass(): any {
		return Java.type('co.aikar.commands.LogLevel');
	}
	public static $isInstance(obj: any): obj is LogLevel {
		return obj instanceof LogLevel.$javaClass;
	}

	public static get ERROR(): LogLevel {
		return this.$javaClass.ERROR;
	}
	public static get INFO(): LogLevel {
		return this.$javaClass.INFO;
	}
}

