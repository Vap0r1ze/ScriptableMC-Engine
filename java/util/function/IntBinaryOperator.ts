declare var Java: any;

export default interface IntBinaryOperator {
	applyAsInt(arg0: number, arg1: number): number;
}

export default class IntBinaryOperator {
	public static get $javaClass(): any {
		return Java.type('java.util.function.IntBinaryOperator');
	}
	public static $isInstance(obj: any): obj is IntBinaryOperator {
		return obj instanceof IntBinaryOperator.$javaClass;
	}

}

