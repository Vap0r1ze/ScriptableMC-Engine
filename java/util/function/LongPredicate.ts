declare var Java: any;

export default interface LongPredicate {
	and(arg0: LongPredicate): LongPredicate;
	negate(): LongPredicate;
	or(arg0: LongPredicate): LongPredicate;
	test(arg0: number): boolean;
}

export default class LongPredicate {
	public static get $javaClass(): any {
		return Java.type('java.util.function.LongPredicate');
	}
	public static $isInstance(obj: any): obj is LongPredicate {
		return obj instanceof LongPredicate.$javaClass;
	}

}

