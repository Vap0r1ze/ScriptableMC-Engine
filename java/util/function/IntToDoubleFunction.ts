declare var Java: any;

export default interface IntToDoubleFunction {
	applyAsDouble(arg0: number): number;
}

export default class IntToDoubleFunction {
	public static get $javaClass(): any {
		return Java.type('java.util.function.IntToDoubleFunction');
	}
	public static $isInstance(obj: any): obj is IntToDoubleFunction {
		return obj instanceof IntToDoubleFunction.$javaClass;
	}

}

