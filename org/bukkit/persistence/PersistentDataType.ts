declare var Java: any;
import Class from '../../../java/lang/Class.js'
import Object from '../../../java/lang/Object.js'
import PersistentDataAdapterContext from './PersistentDataAdapterContext.js'

export default interface PersistentDataType {
	fromPrimitive(arg0: Object, arg1: PersistentDataAdapterContext): Object;
	getComplexType(): Class;
	getPrimitiveType(): Class;
	toPrimitive(arg0: Object, arg1: PersistentDataAdapterContext): Object;
}

export default class PersistentDataType {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.persistence.PersistentDataType');
	}
	public static $isInstance(obj: any): obj is PersistentDataType {
		return obj instanceof PersistentDataType.$javaClass;
	}

	public static get BYTE(): PersistentDataType {
		return PersistentDataType.$javaClass.BYTE;
	}

	public static get BYTE_ARRAY(): PersistentDataType {
		return PersistentDataType.$javaClass.BYTE_ARRAY;
	}

	public static get DOUBLE(): PersistentDataType {
		return PersistentDataType.$javaClass.DOUBLE;
	}

	public static get FLOAT(): PersistentDataType {
		return PersistentDataType.$javaClass.FLOAT;
	}

	public static get INTEGER(): PersistentDataType {
		return PersistentDataType.$javaClass.INTEGER;
	}

	public static get INTEGER_ARRAY(): PersistentDataType {
		return PersistentDataType.$javaClass.INTEGER_ARRAY;
	}

	public static get LONG(): PersistentDataType {
		return PersistentDataType.$javaClass.LONG;
	}

	public static get LONG_ARRAY(): PersistentDataType {
		return PersistentDataType.$javaClass.LONG_ARRAY;
	}

	public static get SHORT(): PersistentDataType {
		return PersistentDataType.$javaClass.SHORT;
	}

	public static get STRING(): PersistentDataType {
		return PersistentDataType.$javaClass.STRING;
	}

	public static get TAG_CONTAINER(): PersistentDataType {
		return PersistentDataType.$javaClass.TAG_CONTAINER;
	}

	public static get TAG_CONTAINER_ARRAY(): PersistentDataType {
		return PersistentDataType.$javaClass.TAG_CONTAINER_ARRAY;
	}

}

