declare var Java: any;
import Class from '../../../java/lang/Class.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'

export default interface CoderResult extends Object {
	isError(): boolean;
	isMalformed(): boolean;
	isOverflow(): boolean;
	isUnderflow(): boolean;
	isUnmappable(): boolean;
	length(): number;
	throwException(): void;
}

export default class CoderResult {
	public static get $javaClass(): any {
		return Java.type('java.nio.charset.CoderResult');
	}
	public static $isInstance(obj: any): obj is CoderResult {
		return obj instanceof CoderResult.$javaClass;
	}

	public static get OVERFLOW(): CoderResult {
		return CoderResult.$javaClass.OVERFLOW;
	}

	public static get UNDERFLOW(): CoderResult {
		return CoderResult.$javaClass.UNDERFLOW;
	}

	public static malformedForLength(arg0: number): CoderResult;
	public static malformedForLength(...args: any[]): any {
		return CoderResult.$javaClass.malformedForLength(...args);
	}

	public static unmappableForLength(arg0: number): CoderResult;
	public static unmappableForLength(...args: any[]): any {
		return CoderResult.$javaClass.unmappableForLength(...args);
	}

}

