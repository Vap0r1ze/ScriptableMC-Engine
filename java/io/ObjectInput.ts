declare var Java: any;
import AutoCloseable from '../../java/lang/AutoCloseable.js'
import DataInput from './DataInput.js'
import Object from '../../java/lang/Object.js'
import String from '../../java/lang/String.js'

export default interface ObjectInput extends DataInput, AutoCloseable {
	available(): number;
	close(): void;
	read(): number;
	read(arg0: Array<number>): number;
	read(arg0: Array<number>, arg1: number, arg2: number): number;
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
	readObject(): Object;
	readShort(): number;
	readUTF(): string;
	readUnsignedByte(): number;
	readUnsignedShort(): number;
	skip(arg0: number): number;
	skipBytes(arg0: number): number;
}

export default class ObjectInput {
	public static get $javaClass(): any {
		return Java.type('java.io.ObjectInput');
	}
	public static $isInstance(obj: any): obj is ObjectInput {
		return obj instanceof ObjectInput.$javaClass;
	}

}

