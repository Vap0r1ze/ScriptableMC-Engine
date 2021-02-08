declare var Java: any;
import Class from '../../java/lang/Class.js'
import Object from '../../java/lang/Object.js'
import String from '../../java/lang/String.js'

export default class ByteOrder {
	public static get $javaClass(): any {
		return Java.type('java.nio.ByteOrder');
	}
	public static $isInstance(obj: any): obj is ByteOrder {
		return obj instanceof ByteOrder.$javaClass;
	}

	public static get BIG_ENDIAN(): ByteOrder {
		return ByteOrder.$javaClass.BIG_ENDIAN;
	}

	public static get LITTLE_ENDIAN(): ByteOrder {
		return ByteOrder.$javaClass.LITTLE_ENDIAN;
	}

	public static nativeOrder(): ByteOrder;
	public static nativeOrder(...args: any[]): any {
		return ByteOrder.$javaClass.nativeOrder(...args);
	}

}

