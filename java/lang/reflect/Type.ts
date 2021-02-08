declare var Java: any;
import String from '../../../java/lang/String.js'

export default interface Type {
	getTypeName(): string;
}

export default class Type {
	public static get $javaClass(): any {
		return Java.type('java.lang.reflect.Type');
	}
	public static $isInstance(obj: any): obj is Type {
		return obj instanceof Type.$javaClass;
	}

}

