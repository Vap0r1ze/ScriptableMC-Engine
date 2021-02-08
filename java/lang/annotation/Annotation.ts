declare var Java: any;
import Class from '../../../java/lang/Class.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'

export default interface Annotation {
	annotationType(): Class;
}

export default class Annotation {
	public static get $javaClass(): any {
		return Java.type('java.lang.annotation.Annotation');
	}
	public static $isInstance(obj: any): obj is Annotation {
		return obj instanceof Annotation.$javaClass;
	}

}

