declare var Java: any;

export default interface LongToDoubleFunction {
	applyAsDouble(arg0: number): number;
}

export default class LongToDoubleFunction {
	public static get $javaClass(): any {
		return Java.type('java.util.function.LongToDoubleFunction');
	}
	public static $isInstance(obj: any): obj is LongToDoubleFunction {
		return obj instanceof LongToDoubleFunction.$javaClass;
	}

}

