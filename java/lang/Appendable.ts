declare var Java: any;
import CharSequence from './CharSequence.js'

export default interface Appendable {
	append(arg0: CharSequence): Appendable;
	append(arg0: string): Appendable;
	append(arg0: CharSequence, arg1: number, arg2: number): Appendable;
}

export default class Appendable {
	public static get $javaClass(): any {
		return Java.type('java.lang.Appendable');
	}
	public static $isInstance(obj: any): obj is Appendable {
		return obj instanceof Appendable.$javaClass;
	}

}

