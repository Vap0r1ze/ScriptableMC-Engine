declare var Java: any;
import Map from '../../java/util/Map.js'
import Object from '../../java/lang/Object.js'
import ResultSet from './ResultSet.js'
import String from '../../java/lang/String.js'

export default interface _Array {
	free(): void;
	getArray(): Object;
	getArray(arg0: Map): Object;
	getArray(arg0: number, arg1: number): Object;
	getArray(arg0: number, arg1: number, arg2: Map): Object;
	getBaseType(): number;
	getBaseTypeName(): string;
	getResultSet(): ResultSet;
	getResultSet(arg0: Map): ResultSet;
	getResultSet(arg0: number, arg1: number): ResultSet;
	getResultSet(arg0: number, arg1: number, arg2: Map): ResultSet;
}

export default class _Array {
	public static get $javaClass(): any {
		return Java.type('java.sql.Array');
	}
	public static $isInstance(obj: any): obj is _Array {
		return obj instanceof _Array.$javaClass;
	}

}

