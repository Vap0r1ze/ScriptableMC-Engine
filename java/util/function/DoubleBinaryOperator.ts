declare var Java: any;

export default interface DoubleBinaryOperator {
	applyAsDouble(arg0: number, arg1: number): number;
}

export default class DoubleBinaryOperator {
	public static get $javaClass(): any {
		return Java.type('java.util.function.DoubleBinaryOperator');
	}
	public static $isInstance(obj: any): obj is DoubleBinaryOperator {
		return obj instanceof DoubleBinaryOperator.$javaClass;
	}

}

