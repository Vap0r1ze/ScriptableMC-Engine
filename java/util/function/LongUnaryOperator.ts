declare var Java: any;

export default interface LongUnaryOperator {
	andThen(arg0: LongUnaryOperator): LongUnaryOperator;
	applyAsLong(arg0: number): number;
	compose(arg0: LongUnaryOperator): LongUnaryOperator;
}

export default class LongUnaryOperator {
	public static get $javaClass(): any {
		return Java.type('java.util.function.LongUnaryOperator');
	}
	public static $isInstance(obj: any): obj is LongUnaryOperator {
		return obj instanceof LongUnaryOperator.$javaClass;
	}

	public static identity(): LongUnaryOperator;
	public static identity(...args: any[]): any {
		return LongUnaryOperator.$javaClass.identity(...args);
	}

}

