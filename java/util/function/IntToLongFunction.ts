declare var Java: any;

export default interface IntToLongFunction {
	applyAsLong(arg0: number): number;
}

export default class IntToLongFunction {
	public static get $javaClass(): any {
		return Java.type('java.util.function.IntToLongFunction');
	}
	public static $isInstance(obj: any): obj is IntToLongFunction {
		return obj instanceof IntToLongFunction.$javaClass;
	}

}

