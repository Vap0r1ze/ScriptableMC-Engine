declare var Java: any;
import Annotation from '../../../../java/lang/annotation/Annotation.js'
import Class from '../../../../java/lang/Class.js'
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'

export default interface DelegateDeserialization extends Annotation {
	annotationType(): Class;
	value(): Class;
}

export default class DelegateDeserialization {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.configuration.serialization.DelegateDeserialization');
	}
	public static $isInstance(obj: any): obj is DelegateDeserialization {
		return obj instanceof DelegateDeserialization.$javaClass;
	}

}

