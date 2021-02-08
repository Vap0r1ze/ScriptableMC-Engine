declare var Java: any;

export default interface DoubleUnaryOperator {
	andThen(arg0: DoubleUnaryOperator): DoubleUnaryOperator;
	applyAsDouble(arg0: number): number;
	compose(arg0: DoubleUnaryOperator): DoubleUnaryOperator;
}

export default class DoubleUnaryOperator {
	public static get $javaClass(): any {
		return Java.type('java.util.function.DoubleUnaryOperator');
	}
	public static $isInstance(obj: any): obj is DoubleUnaryOperator {
		return obj instanceof DoubleUnaryOperator.$javaClass;
	}

	public static identity(): DoubleUnaryOperator;
	public static identity(...args: any[]): any {
		return DoubleUnaryOperator.$javaClass.identity(...args);
	}

}

