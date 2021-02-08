declare var Java: any;
import Map from '../../java/util/Map.js'
import Object from '../../java/lang/Object.js'
import String from '../../java/lang/String.js'

export default interface Ref {
	getBaseTypeName(): string;
	getObject(): Object;
	getObject(arg0: Map): Object;
	setObject(arg0: Object): void;
}

export default class Ref {
	public static get $javaClass(): any {
		return Java.type('java.sql.Ref');
	}
	public static $isInstance(obj: any): obj is Ref {
		return obj instanceof Ref.$javaClass;
	}

}

