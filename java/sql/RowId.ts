declare var Java: any;

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

