declare var Java: any;

export default interface LongToIntFunction {
	applyAsInt(arg0: number): number;
}

export default class LongToIntFunction {
	public static get $javaClass(): any {
		return Java.type('java.util.function.LongToIntFunction');
	}
	public static $isInstance(obj: any): obj is LongToIntFunction {
		return obj instanceof LongToIntFunction.$javaClass;
	}

}

