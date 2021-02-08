declare var Java: any;
import Class from '../../java/lang/Class.js'
import Object from '../../java/lang/Object.js'
import String from '../../java/lang/String.js'
import Wrapper from './Wrapper.js'

export default interface ResultSetMetaData extends Wrapper {
	getCatalogName(arg0: number): string;
	getColumnClassName(arg0: number): string;
	getColumnCount(): number;
	getColumnDisplaySize(arg0: number): number;
	getColumnLabel(arg0: number): string;
	getColumnName(arg0: number): string;
	getColumnType(arg0: number): number;
	getColumnTypeName(arg0: number): string;
	getPrecision(arg0: number): number;
	getScale(arg0: number): number;
	getSchemaName(arg0: number): string;
	getTableName(arg0: number): string;
	isAutoIncrement(arg0: number): boolean;
	isCaseSensitive(arg0: number): boolean;
	isCurrency(arg0: number): boolean;
	isDefinitelyWritable(arg0: number): boolean;
	isNullable(arg0: number): number;
	isReadOnly(arg0: number): boolean;
	isSearchable(arg0: number): boolean;
	isSigned(arg0: number): boolean;
	isWrapperFor(arg0: Class): boolean;
	isWritable(arg0: number): boolean;
	unwrap(arg0: Class): Object;
}

export default class ResultSetMetaData {
	public static get $javaClass(): any {
		return Java.type('java.sql.ResultSetMetaData');
	}
	public static $isInstance(obj: any): obj is ResultSetMetaData {
		return obj instanceof ResultSetMetaData.$javaClass;
	}

	public static get columnNoNulls(): number {
		return ResultSetMetaData.$javaClass.columnNoNulls;
	}

	public static get columnNullable(): number {
		return ResultSetMetaData.$javaClass.columnNullable;
	}

	public static get columnNullableUnknown(): number {
		return ResultSetMetaData.$javaClass.columnNullableUnknown;
	}

}

