declare var Java: any;
import IntStream from '../../java/util/stream/IntStream.js'
import String from './String.js'

export default interface CharSequence {
	charAt(arg0: number): string;
	chars(): IntStream;
	codePoints(): IntStream;
	length(): number;
	subSequence(arg0: number, arg1: number): CharSequence;
}

export default class CharSequence {
	public static get $javaClass(): any {
		return Java.type('java.lang.CharSequence');
	}
	public static $isInstance(obj: any): obj is CharSequence {
		return obj instanceof CharSequence.$javaClass;
	}

}

