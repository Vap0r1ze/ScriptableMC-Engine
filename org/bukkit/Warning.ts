declare var Java: any;
import Annotation from '../../java/lang/annotation/Annotation.js'
import Class from '../../java/lang/Class.js'
import Object from '../../java/lang/Object.js'
import String from '../../java/lang/String.js'

export default interface Warning extends Annotation {
	annotationType(): Class;
	reason(): string;
	value(): boolean;
}

export default class Warning {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.Warning');
	}
	public static $isInstance(obj: any): obj is Warning {
		return obj instanceof Warning.$javaClass;
	}

}

