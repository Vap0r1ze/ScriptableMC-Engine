declare var Java: any;
import Class from '../../../java/lang/Class.js'
import Enum from '../../../java/lang/Enum.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'
import Thread from '../../../java/lang/Thread.js'

export default interface TimeUnit extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	convert(arg0: number, arg1: TimeUnit): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
	sleep(arg0: number): void;
	timedJoin(arg0: Thread, arg1: number): void;
	timedWait(arg0: Object, arg1: number): void;
	toDays(arg0: number): number;
	toHours(arg0: number): number;
	toMicros(arg0: number): number;
	toMillis(arg0: number): number;
	toMinutes(arg0: number): number;
	toNanos(arg0: number): number;
	toSeconds(arg0: number): number;
}

export default class TimeUnit {
	public static get $javaClass(): any {
		return Java.type('java.util.concurrent.TimeUnit');
	}
	public static $isInstance(obj: any): obj is TimeUnit {
		return obj instanceof TimeUnit.$javaClass;
	}

	public static get DAYS(): TimeUnit {
		return this.$javaClass.DAYS;
	}
	public static get HOURS(): TimeUnit {
		return this.$javaClass.HOURS;
	}
	public static get MICROSECONDS(): TimeUnit {
		return this.$javaClass.MICROSECONDS;
	}
	public static get MILLISECONDS(): TimeUnit {
		return this.$javaClass.MILLISECONDS;
	}
	public static get MINUTES(): TimeUnit {
		return this.$javaClass.MINUTES;
	}
	public static get NANOSECONDS(): TimeUnit {
		return this.$javaClass.NANOSECONDS;
	}
	public static get SECONDS(): TimeUnit {
		return this.$javaClass.SECONDS;
	}
}

