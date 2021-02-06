declare var Java: any;
import ByteBuffer from '../../../java/nio/ByteBuffer.js'
import CharBuffer from '../../../java/nio/CharBuffer.js'
import CharsetDecoder from './CharsetDecoder.js'
import CharsetEncoder from './CharsetEncoder.js'

export default interface Charset {
	aliases(): any;
	canEncode(): boolean;
	compareTo(arg0: any): number;
	compareTo(arg0: Charset): number;
	contains(arg0: Charset): boolean;
	decode(arg0: ByteBuffer): CharBuffer;
	displayName(): string;
	displayName(arg0: any): string;
	encode(arg0: CharBuffer): ByteBuffer;
	encode(arg0: string): ByteBuffer;
	isRegistered(): boolean;
	name(): string;
	newDecoder(): CharsetDecoder;
	newEncoder(): CharsetEncoder;
}

export default class Charset {
	public static get $javaClass(): any {
		return Java.type('java.nio.charset.Charset');
	}

	public static availableCharsets(): any;
	public static availableCharsets(...args: any[]): any {
		return Charset.$javaClass.availableCharsets(...args);
	}

	public static defaultCharset(): Charset;
	public static defaultCharset(...args: any[]): any {
		return Charset.$javaClass.defaultCharset(...args);
	}

	public static forName(arg0: string): Charset;
	public static forName(...args: any[]): any {
		return Charset.$javaClass.forName(...args);
	}

	public static isSupported(arg0: string): boolean;
	public static isSupported(...args: any[]): any {
		return Charset.$javaClass.isSupported(...args);
	}

}

