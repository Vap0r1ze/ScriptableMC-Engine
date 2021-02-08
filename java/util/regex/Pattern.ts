declare var Java: any;
import CharSequence from '../../../java/lang/CharSequence.js'
import Class from '../../../java/lang/Class.js'
import Matcher from './Matcher.js'
import Object from '../../../java/lang/Object.js'
import Predicate from '../../../java/util/function/Predicate.js'
import Serializable from '../../../java/io/Serializable.js'
import Stream from '../../../java/util/stream/Stream.js'
import String from '../../../java/lang/String.js'

export default interface Pattern extends Object, Serializable {
	asPredicate(): Predicate;
	flags(): number;
	matcher(arg0: CharSequence): Matcher;
	pattern(): string;
	split(arg0: CharSequence): Array<string>;
	split(arg0: CharSequence, arg1: number): Array<string>;
	splitAsStream(arg0: CharSequence): Stream;
}

export default class Pattern {
	public static get $javaClass(): any {
		return Java.type('java.util.regex.Pattern');
	}
	public static $isInstance(obj: any): obj is Pattern {
		return obj instanceof Pattern.$javaClass;
	}

	public static get CANON_EQ(): number {
		return Pattern.$javaClass.CANON_EQ;
	}

	public static get CASE_INSENSITIVE(): number {
		return Pattern.$javaClass.CASE_INSENSITIVE;
	}

	public static get COMMENTS(): number {
		return Pattern.$javaClass.COMMENTS;
	}

	public static get DOTALL(): number {
		return Pattern.$javaClass.DOTALL;
	}

	public static get LITERAL(): number {
		return Pattern.$javaClass.LITERAL;
	}

	public static get MULTILINE(): number {
		return Pattern.$javaClass.MULTILINE;
	}

	public static get UNICODE_CASE(): number {
		return Pattern.$javaClass.UNICODE_CASE;
	}

	public static get UNICODE_CHARACTER_CLASS(): number {
		return Pattern.$javaClass.UNICODE_CHARACTER_CLASS;
	}

	public static get UNIX_LINES(): number {
		return Pattern.$javaClass.UNIX_LINES;
	}

	public static compile(arg0: string): Pattern;
	public static compile(arg0: string, arg1: number): Pattern;
	public static compile(...args: any[]): any {
		return Pattern.$javaClass.compile(...args);
	}

	public static matches(arg0: string, arg1: CharSequence): boolean;
	public static matches(...args: any[]): any {
		return Pattern.$javaClass.matches(...args);
	}

	public static quote(arg0: string): string;
	public static quote(...args: any[]): any {
		return Pattern.$javaClass.quote(...args);
	}

}

