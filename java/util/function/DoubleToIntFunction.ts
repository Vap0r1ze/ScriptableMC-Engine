declare var Java: any;

export default interface DoubleToIntFunction {
	applyAsInt(arg0: number): number;
}

export default class DoubleToIntFunction {
	public static get $javaClass(): any {
		return Java.type('java.util.function.DoubleToIntFunction');
	}
	public static $isInstance(obj: any): obj is DoubleToIntFunction {
		return obj instanceof DoubleToIntFunction.$javaClass;
	}

}

