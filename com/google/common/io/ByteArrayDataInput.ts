declare var Java: any;
import DataInput from '../../../../java/io/DataInput.js'
import String from '../../../../java/lang/String.js'

export default interface ByteArrayDataInput extends DataInput {
	readBoolean(): boolean;
	readByte(): number;
	readChar(): string;
	readDouble(): number;
	readFloat(): number;
	readFully(arg0: Array<number>): void;
	readFully(arg0: Array<number>, arg1: number, arg2: number): void;
	readInt(): number;
	readLine(): string;
	readLong(): number;
	readShort(): number;
	readUTF(): string;
	readUnsignedByte(): number;
	readUnsignedShort(): number;
	skipBytes(arg0: number): number;
}

export default class ByteArrayDataInput {
	public static get $javaClass(): any {
		return Java.type('com.google.common.io.ByteArrayDataInput');
	}
	public static $isInstance(obj: any): obj is ByteArrayDataInput {
		return obj instanceof ByteArrayDataInput.$javaClass;
	}

}

