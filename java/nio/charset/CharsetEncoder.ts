declare var Java: any;
import ByteBuffer from '../../../java/nio/ByteBuffer.js'
import CharBuffer from '../../../java/nio/CharBuffer.js'
import CharSequence from '../../../java/lang/CharSequence.js'
import Charset from './Charset.js'
import Class from '../../../java/lang/Class.js'
import CoderResult from './CoderResult.js'
import CodingErrorAction from './CodingErrorAction.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'

export default interface CharsetEncoder extends Object {
	averageBytesPerChar(): number;
	canEncode(arg0: string): boolean;
	canEncode(arg0: CharSequence): boolean;
	charset(): Charset;
	encode(arg0: CharBuffer): ByteBuffer;
	encode(arg0: CharBuffer, arg1: ByteBuffer, arg2: boolean): CoderResult;
	flush(arg0: ByteBuffer): CoderResult;
	isLegalReplacement(arg0: Array<number>): boolean;
	malformedInputAction(): CodingErrorAction;
	maxBytesPerChar(): number;
	onMalformedInput(arg0: CodingErrorAction): CharsetEncoder;
	onUnmappableCharacter(arg0: CodingErrorAction): CharsetEncoder;
	replaceWith(arg0: Array<number>): CharsetEncoder;
	replacement(): Array<number>;
	reset(): CharsetEncoder;
	unmappableCharacterAction(): CodingErrorAction;
}

export default class CharsetEncoder {
	public static get $javaClass(): any {
		return Java.type('java.nio.charset.CharsetEncoder');
	}
	public static $isInstance(obj: any): obj is CharsetEncoder {
		return obj instanceof CharsetEncoder.$javaClass;
	}

}

