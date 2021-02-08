declare var Java: any;
import Object from '../../java/lang/Object.js'
import String from '../../java/lang/String.js'

export default interface RowId {
	getBytes(): Array<number>;
}

export default class RowId {
	public static get $javaClass(): any {
		return Java.type('java.sql.RowId');
	}
	public static $isInstance(obj: any): obj is RowId {
		return obj instanceof RowId.$javaClass;
	}

}

