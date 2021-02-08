declare var Java: any;

export default interface IntUnaryOperator {
	andThen(arg0: IntUnaryOperator): IntUnaryOperator;
	applyAsInt(arg0: number): number;
	compose(arg0: IntUnaryOperator): IntUnaryOperator;
}

export default class IntUnaryOperator {
	public static get $javaClass(): any {
		return Java.type('java.util.function.IntUnaryOperator');
	}
	public static $isInstance(obj: any): obj is IntUnaryOperator {
		return obj instanceof IntUnaryOperator.$javaClass;
	}

	public static identity(): IntUnaryOperator;
	public static identity(...args: any[]): any {
		return IntUnaryOperator.$javaClass.identity(...args);
	}

}

