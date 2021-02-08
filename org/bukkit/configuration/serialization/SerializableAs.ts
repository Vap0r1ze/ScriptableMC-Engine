declare var Java: any;
import Annotation from '../../../../java/lang/annotation/Annotation.js'
import Class from '../../../../java/lang/Class.js'
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'

export default interface SerializableAs extends Annotation {
	annotationType(): Class;
	value(): string;
}

export default class SerializableAs {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.configuration.serialization.SerializableAs');
	}
	public static $isInstance(obj: any): obj is SerializableAs {
		return obj instanceof SerializableAs.$javaClass;
	}

}

