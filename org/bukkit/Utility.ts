declare var Java: any;
import Annotation from '../../java/lang/annotation/Annotation.js'
import Class from '../../java/lang/Class.js'
import Object from '../../java/lang/Object.js'
import String from '../../java/lang/String.js'

export default interface Utility extends Annotation {
	annotationType(): Class;
}

export default class Utility {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.Utility');
	}
	public static $isInstance(obj: any): obj is Utility {
		return obj instanceof Utility.$javaClass;
	}

}

