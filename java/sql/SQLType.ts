declare var Java: any;
import Integer from '../../java/lang/Integer.js'
import String from '../../java/lang/String.js'

export default interface SQLType {
	getName(): string;
	getVendor(): string;
	getVendorTypeNumber(): Integer;
}

export default class SQLType {
	public static get $javaClass(): any {
		return Java.type('java.sql.SQLType');
	}
	public static $isInstance(obj: any): obj is SQLType {
		return obj instanceof SQLType.$javaClass;
	}

}

