declare var Java: any;

export default interface IntPredicate {
	and(arg0: IntPredicate): IntPredicate;
	negate(): IntPredicate;
	or(arg0: IntPredicate): IntPredicate;
	test(arg0: number): boolean;
}

export default class IntPredicate {
	public static get $javaClass(): any {
		return Java.type('java.util.function.IntPredicate');
	}
	public static $isInstance(obj: any): obj is IntPredicate {
		return obj instanceof IntPredicate.$javaClass;
	}

}

