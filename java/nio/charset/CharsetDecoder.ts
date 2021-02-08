declare var Java: any;
import ByteBuffer from '../../../java/nio/ByteBuffer.js'
import CharBuffer from '../../../java/nio/CharBuffer.js'
import Charset from './Charset.js'
import Class from '../../../java/lang/Class.js'
import CoderResult from './CoderResult.js'
import CodingErrorAction from './CodingErrorAction.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'

export default interface CharsetDecoder extends Object {
	averageCharsPerByte(): number;
	charset(): Charset;
	decode(arg0: ByteBuffer): CharBuffer;
	decode(arg0: ByteBuffer, arg1: CharBuffer, arg2: boolean): CoderResult;
	detectedCharset(): Charset;
	flush(arg0: CharBuffer): CoderResult;
	isAutoDetecting(): boolean;
	isCharsetDetected(): boolean;
	malformedInputAction(): CodingErrorAction;
	maxCharsPerByte(): number;
	onMalformedInput(arg0: CodingErrorAction): CharsetDecoder;
	onUnmappableCharacter(arg0: CodingErrorAction): CharsetDecoder;
	replaceWith(arg0: string): CharsetDecoder;
	replacement(): string;
	reset(): CharsetDecoder;
	unmappableCharacterAction(): CodingErrorAction;
}

export default class CharsetDecoder {
	public static get $javaClass(): any {
		return Java.type('java.nio.charset.CharsetDecoder');
	}
	public static $isInstance(obj: any): obj is CharsetDecoder {
		return obj instanceof CharsetDecoder.$javaClass;
	}

}

