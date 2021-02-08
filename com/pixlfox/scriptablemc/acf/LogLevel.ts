declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import Enum from '../../../../java/lang/Enum.js'
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'

export default interface LogLevel extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
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

