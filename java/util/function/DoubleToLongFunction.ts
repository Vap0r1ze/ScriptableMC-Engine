declare var Java: any;

export default interface DoubleToLongFunction {
	applyAsLong(arg0: number): number;
}

export default class DoubleToLongFunction {
	public static get $javaClass(): any {
		return Java.type('java.util.function.DoubleToLongFunction');
	}
	public static $isInstance(obj: any): obj is DoubleToLongFunction {
		return obj instanceof DoubleToLongFunction.$javaClass;
	}

}

