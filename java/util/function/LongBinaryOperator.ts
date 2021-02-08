declare var Java: any;

export default interface LongBinaryOperator {
	applyAsLong(arg0: number, arg1: number): number;
}

export default class LongBinaryOperator {
	public static get $javaClass(): any {
		return Java.type('java.util.function.LongBinaryOperator');
	}
	public static $isInstance(obj: any): obj is LongBinaryOperator {
		return obj instanceof LongBinaryOperator.$javaClass;
	}

}

