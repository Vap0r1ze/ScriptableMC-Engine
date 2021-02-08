declare var Java: any;
import Map from '../../java/util/Map.js'
import Object from '../../java/lang/Object.js'
import String from '../../java/lang/String.js'

export default interface Struct {
	getAttributes(): Array<Object>;
	getAttributes(arg0: Map): Array<Object>;
	getSQLTypeName(): string;
}

export default class Struct {
	public static get $javaClass(): any {
		return Java.type('java.sql.Struct');
	}
	public static $isInstance(obj: any): obj is Struct {
		return obj instanceof Struct.$javaClass;
	}

}

