declare var Java: any;
import Class from '../../java/lang/Class.js'
import Object from '../../java/lang/Object.js'
import ObjectOutput from './ObjectOutput.js'
import ObjectOutputStream$PutField from './ObjectOutputStream$PutField.js'
import ObjectStreamConstants from './ObjectStreamConstants.js'
import OutputStream from './OutputStream.js'
import SerializablePermission from './SerializablePermission.js'
import String from '../../java/lang/String.js'

export default interface ObjectOutputStream extends OutputStream, ObjectOutput, ObjectStreamConstants {
	close(): void;
	defaultWriteObject(): void;
	flush(): void;
	putFields(): ObjectOutputStream$PutField;
	reset(): void;
	useProtocolVersion(arg0: number): void;
	write(arg0: number): void;
	write(arg0: Array<number>): void;
	write(arg0: Array<number>, arg1: number, arg2: number): void;
	writeBoolean(arg0: boolean): void;
	writeByte(arg0: number): void;
	writeBytes(arg0: string): void;
	writeChar(arg0: number): void;
	writeChars(arg0: string): void;
	writeDouble(arg0: number): void;
	writeFields(): void;
	writeFloat(arg0: number): void;
	writeInt(arg0: number): void;
	writeLong(arg0: number): void;
	writeObject(arg0: Object): void;
	writeShort(arg0: number): void;
	writeUTF(arg0: string): void;
	writeUnshared(arg0: Object): void;
}

export default class ObjectOutputStream {
	public static get $javaClass(): any {
		return Java.type('java.io.ObjectOutputStream');
	}
	public static $isInstance(obj: any): obj is ObjectOutputStream {
		return obj instanceof ObjectOutputStream.$javaClass;
	}

	constructor(arg0: OutputStream);
	constructor(...args: any[]) {
		return new ObjectOutputStream.$javaClass(...args);
	}

	public static get PROTOCOL_VERSION_1(): number {
		return ObjectOutputStream.$javaClass.PROTOCOL_VERSION_1;
	}

	public static get PROTOCOL_VERSION_2(): number {
		return ObjectOutputStream.$javaClass.PROTOCOL_VERSION_2;
	}

	public static get SC_BLOCK_DATA(): number {
		return ObjectOutputStream.$javaClass.SC_BLOCK_DATA;
	}

	public static get SC_ENUM(): number {
		return ObjectOutputStream.$javaClass.SC_ENUM;
	}

	public static get SC_EXTERNALIZABLE(): number {
		return ObjectOutputStream.$javaClass.SC_EXTERNALIZABLE;
	}

	public static get SC_SERIALIZABLE(): number {
		return ObjectOutputStream.$javaClass.SC_SERIALIZABLE;
	}

	public static get SC_WRITE_METHOD(): number {
		return ObjectOutputStream.$javaClass.SC_WRITE_METHOD;
	}

	public static get STREAM_MAGIC(): number {
		return ObjectOutputStream.$javaClass.STREAM_MAGIC;
	}

	public static get STREAM_VERSION(): number {
		return ObjectOutputStream.$javaClass.STREAM_VERSION;
	}

	public static get SUBCLASS_IMPLEMENTATION_PERMISSION(): SerializablePermission {
		return ObjectOutputStream.$javaClass.SUBCLASS_IMPLEMENTATION_PERMISSION;
	}

	public static get SUBSTITUTION_PERMISSION(): SerializablePermission {
		return ObjectOutputStream.$javaClass.SUBSTITUTION_PERMISSION;
	}

	public static get TC_ARRAY(): number {
		return ObjectOutputStream.$javaClass.TC_ARRAY;
	}

	public static get TC_BASE(): number {
		return ObjectOutputStream.$javaClass.TC_BASE;
	}

	public static get TC_BLOCKDATA(): number {
		return ObjectOutputStream.$javaClass.TC_BLOCKDATA;
	}

	public static get TC_BLOCKDATALONG(): number {
		return ObjectOutputStream.$javaClass.TC_BLOCKDATALONG;
	}

	public static get TC_CLASS(): number {
		return ObjectOutputStream.$javaClass.TC_CLASS;
	}

	public static get TC_CLASSDESC(): number {
		return ObjectOutputStream.$javaClass.TC_CLASSDESC;
	}

	public static get TC_ENDBLOCKDATA(): number {
		return ObjectOutputStream.$javaClass.TC_ENDBLOCKDATA;
	}

	public static get TC_ENUM(): number {
		return ObjectOutputStream.$javaClass.TC_ENUM;
	}

	public static get TC_EXCEPTION(): number {
		return ObjectOutputStream.$javaClass.TC_EXCEPTION;
	}

	public static get TC_LONGSTRING(): number {
		return ObjectOutputStream.$javaClass.TC_LONGSTRING;
	}

	public static get TC_MAX(): number {
		return ObjectOutputStream.$javaClass.TC_MAX;
	}

	public static get TC_NULL(): number {
		return ObjectOutputStream.$javaClass.TC_NULL;
	}

	public static get TC_OBJECT(): number {
		return ObjectOutputStream.$javaClass.TC_OBJECT;
	}

	public static get TC_PROXYCLASSDESC(): number {
		return ObjectOutputStream.$javaClass.TC_PROXYCLASSDESC;
	}

	public static get TC_REFERENCE(): number {
		return ObjectOutputStream.$javaClass.TC_REFERENCE;
	}

	public static get TC_RESET(): number {
		return ObjectOutputStream.$javaClass.TC_RESET;
	}

	public static get TC_STRING(): number {
		return ObjectOutputStream.$javaClass.TC_STRING;
	}

	public static get baseWireHandle(): number {
		return ObjectOutputStream.$javaClass.baseWireHandle;
	}

}

