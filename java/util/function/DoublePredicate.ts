declare var Java: any;

export default interface DoublePredicate {
	and(arg0: DoublePredicate): DoublePredicate;
	negate(): DoublePredicate;
	or(arg0: DoublePredicate): DoublePredicate;
	test(arg0: number): boolean;
}

export default class DoublePredicate {
	public static get $javaClass(): any {
		return Java.type('java.util.function.DoublePredicate');
	}
	public static $isInstance(obj: any): obj is DoublePredicate {
		return obj instanceof DoublePredicate.$javaClass;
	}

}

