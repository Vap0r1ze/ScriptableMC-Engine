declare var Java: any;
import Blob from './Blob.js'
import Calendar from '../../java/util/Calendar.js'
import Class from '../../java/lang/Class.js'
import Clob from './Clob.js'
import Connection from './Connection.js'
import Date from './Date.js'
import InputStream from '../../java/io/InputStream.js'
import Map from '../../java/util/Map.js'
import NClob from './NClob.js'
import Object from '../../java/lang/Object.js'
import ParameterMetaData from './ParameterMetaData.js'
import PreparedStatement from './PreparedStatement.js'
import Reader from '../../java/io/Reader.js'
import Ref from './Ref.js'
import ResultSet from './ResultSet.js'
import ResultSetMetaData from './ResultSetMetaData.js'
import RowId from './RowId.js'
import SQLType from './SQLType.js'
import SQLWarning from './SQLWarning.js'
import SQLXML from './SQLXML.js'
import String from '../../java/lang/String.js'
import Time from './Time.js'
import Timestamp from './Timestamp.js'
import _Array from './Array.js'

export default interface CallableStatement extends PreparedStatement {
	addBatch(): void;
	addBatch(arg0: string): void;
	cancel(): void;
	clearBatch(): void;
	clearParameters(): void;
	clearWarnings(): void;
	close(): void;
	closeOnCompletion(): void;
	execute(): boolean;
	execute(arg0: string): boolean;
	execute(arg0: string, arg1: Array<string>): boolean;
	execute(arg0: string, arg1: number): boolean;
	execute(arg0: string, arg1: Array<number>): boolean;
	executeBatch(): Array<number>;
	executeLargeBatch(): Array<number>;
	executeLargeUpdate(): number;
	executeLargeUpdate(arg0: string): number;
	executeLargeUpdate(arg0: string, arg1: Array<number>): number;
	executeLargeUpdate(arg0: string, arg1: number): number;
	executeLargeUpdate(arg0: string, arg1: Array<string>): number;
	executeQuery(): ResultSet;
	executeQuery(arg0: string): ResultSet;
	executeUpdate(): number;
	executeUpdate(arg0: string): number;
	executeUpdate(arg0: string, arg1: Array<number>): number;
	executeUpdate(arg0: string, arg1: number): number;
	executeUpdate(arg0: string, arg1: Array<string>): number;
	getArray(arg0: number): _Array;
	getArray(arg0: string): _Array;
	getBigDecimal(arg0: string): any;
	getBigDecimal(arg0: number): any;
	getBigDecimal(arg0: number, arg1: number): any;
	getBlob(arg0: string): Blob;
	getBlob(arg0: number): Blob;
	getBoolean(arg0: string): boolean;
	getBoolean(arg0: number): boolean;
	getByte(arg0: number): number;
	getByte(arg0: string): number;
	getBytes(arg0: string): Array<number>;
	getBytes(arg0: number): Array<number>;
	getCharacterStream(arg0: number): Reader;
	getCharacterStream(arg0: string): Reader;
	getClob(arg0: string): Clob;
	getClob(arg0: number): Clob;
	getConnection(): Connection;
	getDate(arg0: string): Date;
	getDate(arg0: number): Date;
	getDate(arg0: string, arg1: Calendar): Date;
	getDate(arg0: number, arg1: Calendar): Date;
	getDouble(arg0: number): number;
	getDouble(arg0: string): number;
	getFetchDirection(): number;
	getFetchSize(): number;
	getFloat(arg0: string): number;
	getFloat(arg0: number): number;
	getGeneratedKeys(): ResultSet;
	getInt(arg0: number): number;
	getInt(arg0: string): number;
	getLargeMaxRows(): number;
	getLargeUpdateCount(): number;
	getLong(arg0: string): number;
	getLong(arg0: number): number;
	getMaxFieldSize(): number;
	getMaxRows(): number;
	getMetaData(): ResultSetMetaData;
	getMoreResults(): boolean;
	getMoreResults(arg0: number): boolean;
	getNCharacterStream(arg0: string): Reader;
	getNCharacterStream(arg0: number): Reader;
	getNClob(arg0: string): NClob;
	getNClob(arg0: number): NClob;
	getNString(arg0: number): string;
	getNString(arg0: string): string;
	getObject(arg0: string): Object;
	getObject(arg0: number): Object;
	getObject(arg0: number, arg1: Class): Object;
	getObject(arg0: string, arg1: Map): Object;
	getObject(arg0: string, arg1: Class): Object;
	getObject(arg0: number, arg1: Map): Object;
	getParameterMetaData(): ParameterMetaData;
	getQueryTimeout(): number;
	getRef(arg0: number): Ref;
	getRef(arg0: string): Ref;
	getResultSet(): ResultSet;
	getResultSetConcurrency(): number;
	getResultSetHoldability(): number;
	getResultSetType(): number;
	getRowId(arg0: number): RowId;
	getRowId(arg0: string): RowId;
	getSQLXML(arg0: string): SQLXML;
	getSQLXML(arg0: number): SQLXML;
	getShort(arg0: number): number;
	getShort(arg0: string): number;
	getString(arg0: number): string;
	getString(arg0: string): string;
	getTime(arg0: string): Time;
	getTime(arg0: number): Time;
	getTime(arg0: string, arg1: Calendar): Time;
	getTime(arg0: number, arg1: Calendar): Time;
	getTimestamp(arg0: string): Timestamp;
	getTimestamp(arg0: number): Timestamp;
	getTimestamp(arg0: number, arg1: Calendar): Timestamp;
	getTimestamp(arg0: string, arg1: Calendar): Timestamp;
	getURL(arg0: string): any;
	getURL(arg0: number): any;
	getUpdateCount(): number;
	getWarnings(): SQLWarning;
	isCloseOnCompletion(): boolean;
	isClosed(): boolean;
	isPoolable(): boolean;
	isWrapperFor(arg0: Class): boolean;
	registerOutParameter(arg0: string, arg1: SQLType): void;
	registerOutParameter(arg0: number, arg1: SQLType): void;
	registerOutParameter(arg0: number, arg1: number): void;
	registerOutParameter(arg0: string, arg1: number): void;
	registerOutParameter(arg0: number, arg1: SQLType, arg2: string): void;
	registerOutParameter(arg0: string, arg1: SQLType, arg2: number): void;
	registerOutParameter(arg0: number, arg1: SQLType, arg2: number): void;
	registerOutParameter(arg0: string, arg1: SQLType, arg2: string): void;
	registerOutParameter(arg0: string, arg1: number, arg2: number): void;
	registerOutParameter(arg0: number, arg1: number, arg2: number): void;
	registerOutParameter(arg0: string, arg1: number, arg2: string): void;
	registerOutParameter(arg0: number, arg1: number, arg2: string): void;
	setArray(arg0: number, arg1: _Array): void;
	setAsciiStream(arg0: string, arg1: InputStream): void;
	setAsciiStream(arg0: number, arg1: InputStream): void;
	setAsciiStream(arg0: string, arg1: InputStream, arg2: number): void;
	setAsciiStream(arg0: string, arg1: InputStream, arg2: number): void;
	setAsciiStream(arg0: number, arg1: InputStream, arg2: number): void;
	setAsciiStream(arg0: number, arg1: InputStream, arg2: number): void;
	setBigDecimal(arg0: string, arg1: any): void;
	setBigDecimal(arg0: number, arg1: any): void;
	setBinaryStream(arg0: string, arg1: InputStream): void;
	setBinaryStream(arg0: number, arg1: InputStream): void;
	setBinaryStream(arg0: string, arg1: InputStream, arg2: number): void;
	setBinaryStream(arg0: string, arg1: InputStream, arg2: number): void;
	setBinaryStream(arg0: number, arg1: InputStream, arg2: number): void;
	setBinaryStream(arg0: number, arg1: InputStream, arg2: number): void;
	setBlob(arg0: string, arg1: Blob): void;
	setBlob(arg0: string, arg1: InputStream): void;
	setBlob(arg0: number, arg1: InputStream): void;
	setBlob(arg0: number, arg1: Blob): void;
	setBlob(arg0: string, arg1: InputStream, arg2: number): void;
	setBlob(arg0: number, arg1: InputStream, arg2: number): void;
	setBoolean(arg0: string, arg1: boolean): void;
	setBoolean(arg0: number, arg1: boolean): void;
	setByte(arg0: string, arg1: number): void;
	setByte(arg0: number, arg1: number): void;
	setBytes(arg0: string, arg1: Array<number>): void;
	setBytes(arg0: number, arg1: Array<number>): void;
	setCharacterStream(arg0: string, arg1: Reader): void;
	setCharacterStream(arg0: number, arg1: Reader): void;
	setCharacterStream(arg0: string, arg1: Reader, arg2: number): void;
	setCharacterStream(arg0: string, arg1: Reader, arg2: number): void;
	setCharacterStream(arg0: number, arg1: Reader, arg2: number): void;
	setCharacterStream(arg0: number, arg1: Reader, arg2: number): void;
	setClob(arg0: string, arg1: Clob): void;
	setClob(arg0: string, arg1: Reader): void;
	setClob(arg0: number, arg1: Reader): void;
	setClob(arg0: number, arg1: Clob): void;
	setClob(arg0: string, arg1: Reader, arg2: number): void;
	setClob(arg0: number, arg1: Reader, arg2: number): void;
	setCursorName(arg0: string): void;
	setDate(arg0: string, arg1: Date): void;
	setDate(arg0: number, arg1: Date): void;
	setDate(arg0: string, arg1: Date, arg2: Calendar): void;
	setDate(arg0: number, arg1: Date, arg2: Calendar): void;
	setDouble(arg0: string, arg1: number): void;
	setDouble(arg0: number, arg1: number): void;
	setEscapeProcessing(arg0: boolean): void;
	setFetchDirection(arg0: number): void;
	setFetchSize(arg0: number): void;
	setFloat(arg0: string, arg1: number): void;
	setFloat(arg0: number, arg1: number): void;
	setInt(arg0: string, arg1: number): void;
	setInt(arg0: number, arg1: number): void;
	setLargeMaxRows(arg0: number): void;
	setLong(arg0: string, arg1: number): void;
	setLong(arg0: number, arg1: number): void;
	setMaxFieldSize(arg0: number): void;
	setMaxRows(arg0: number): void;
	setNCharacterStream(arg0: string, arg1: Reader): void;
	setNCharacterStream(arg0: number, arg1: Reader): void;
	setNCharacterStream(arg0: string, arg1: Reader, arg2: number): void;
	setNCharacterStream(arg0: number, arg1: Reader, arg2: number): void;
	setNClob(arg0: string, arg1: Reader): void;
	setNClob(arg0: string, arg1: NClob): void;
	setNClob(arg0: number, arg1: Reader): void;
	setNClob(arg0: number, arg1: NClob): void;
	setNClob(arg0: string, arg1: Reader, arg2: number): void;
	setNClob(arg0: number, arg1: Reader, arg2: number): void;
	setNString(arg0: string, arg1: string): void;
	setNString(arg0: number, arg1: string): void;
	setNull(arg0: string, arg1: number): void;
	setNull(arg0: number, arg1: number): void;
	setNull(arg0: string, arg1: number, arg2: string): void;
	setNull(arg0: number, arg1: number, arg2: string): void;
	setObject(arg0: string, arg1: Object): void;
	setObject(arg0: number, arg1: Object): void;
	setObject(arg0: string, arg1: Object, arg2: SQLType): void;
	setObject(arg0: string, arg1: Object, arg2: number): void;
	setObject(arg0: number, arg1: Object, arg2: SQLType): void;
	setObject(arg0: number, arg1: Object, arg2: number): void;
	setObject(arg0: string, arg1: Object, arg2: number, arg3: number): void;
	setObject(arg0: string, arg1: Object, arg2: SQLType, arg3: number): void;
	setObject(arg0: number, arg1: Object, arg2: number, arg3: number): void;
	setObject(arg0: number, arg1: Object, arg2: SQLType, arg3: number): void;
	setPoolable(arg0: boolean): void;
	setQueryTimeout(arg0: number): void;
	setRef(arg0: number, arg1: Ref): void;
	setRowId(arg0: string, arg1: RowId): void;
	setRowId(arg0: number, arg1: RowId): void;
	setSQLXML(arg0: string, arg1: SQLXML): void;
	setSQLXML(arg0: number, arg1: SQLXML): void;
	setShort(arg0: string, arg1: number): void;
	setShort(arg0: number, arg1: number): void;
	setString(arg0: string, arg1: string): void;
	setString(arg0: number, arg1: string): void;
	setTime(arg0: string, arg1: Time): void;
	setTime(arg0: number, arg1: Time): void;
	setTime(arg0: string, arg1: Time, arg2: Calendar): void;
	setTime(arg0: number, arg1: Time, arg2: Calendar): void;
	setTimestamp(arg0: string, arg1: Timestamp): void;
	setTimestamp(arg0: number, arg1: Timestamp): void;
	setTimestamp(arg0: string, arg1: Timestamp, arg2: Calendar): void;
	setTimestamp(arg0: number, arg1: Timestamp, arg2: Calendar): void;
	setURL(arg0: string, arg1: any): void;
	setURL(arg0: number, arg1: any): void;
	setUnicodeStream(arg0: number, arg1: InputStream, arg2: number): void;
	unwrap(arg0: Class): Object;
	wasNull(): boolean;
}

export default class CallableStatement {
	public static get $javaClass(): any {
		return Java.type('java.sql.CallableStatement');
	}
	public static $isInstance(obj: any): obj is CallableStatement {
		return obj instanceof CallableStatement.$javaClass;
	}

	public static get CLOSE_ALL_RESULTS(): number {
		return CallableStatement.$javaClass.CLOSE_ALL_RESULTS;
	}

	public static get CLOSE_CURRENT_RESULT(): number {
		return CallableStatement.$javaClass.CLOSE_CURRENT_RESULT;
	}

	public static get EXECUTE_FAILED(): number {
		return CallableStatement.$javaClass.EXECUTE_FAILED;
	}

	public static get KEEP_CURRENT_RESULT(): number {
		return CallableStatement.$javaClass.KEEP_CURRENT_RESULT;
	}

	public static get NO_GENERATED_KEYS(): number {
		return CallableStatement.$javaClass.NO_GENERATED_KEYS;
	}

	public static get RETURN_GENERATED_KEYS(): number {
		return CallableStatement.$javaClass.RETURN_GENERATED_KEYS;
	}

	public static get SUCCESS_NO_INFO(): number {
		return CallableStatement.$javaClass.SUCCESS_NO_INFO;
	}

}

