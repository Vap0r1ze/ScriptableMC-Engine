declare var Java: any;
import Object from '../../../java/lang/Object.js'

export default interface Predicate {
	and(arg0: Predicate): Predicate;
	negate(): Predicate;
	or(arg0: Predicate): Predicate;
	test(arg0: Object): boolean;
}

export default class Predicate {
	public static get $javaClass(): any {
		return Java.type('java.util.function.Predicate');
	}
	public static $isInstance(obj: any): obj is Predicate {
		return obj instanceof Predicate.$javaClass;
	}

	public static isEqual(arg0: Object): Predicate;
	public static isEqual(...args: any[]): any {
		return Predicate.$javaClass.isEqual(...args);
	}

}

