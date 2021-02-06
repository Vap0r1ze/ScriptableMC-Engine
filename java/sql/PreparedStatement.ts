declare var Java: any;
import Blob from './Blob.js'
import Clob from './Clob.js'
import Connection from './Connection.js'
import Date from './Date.js'
import InputStream from '../../java/io/InputStream.js'
import NClob from './NClob.js'
import ParameterMetaData from './ParameterMetaData.js'
import Reader from '../../java/io/Reader.js'
import Ref from './Ref.js'
import ResultSet from './ResultSet.js'
import ResultSetMetaData from './ResultSetMetaData.js'
import RowId from './RowId.js'
import SQLType from './SQLType.js'
import SQLWarning from './SQLWarning.js'
import SQLXML from './SQLXML.js'
import Statement from './Statement.js'
import Time from './Time.js'
import Timestamp from './Timestamp.js'
import _Array from './Array.js'

export default interface PreparedStatement extends Statement {
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
	execute(arg0: string, arg1: number): boolean;
	execute(arg0: string, arg1: Array<number>): boolean;
	execute(arg0: string, arg1: Array<string>): boolean;
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
	executeUpdate(arg0: string, arg1: number): number;
	executeUpdate(arg0: string, arg1: Array<number>): number;
	executeUpdate(arg0: string, arg1: Array<string>): number;
	getConnection(): Connection;
	getFetchDirection(): number;
	getFetchSize(): number;
	getGeneratedKeys(): ResultSet;
	getLargeMaxRows(): number;
	getLargeUpdateCount(): number;
	getMaxFieldSize(): number;
	getMaxRows(): number;
	getMetaData(): ResultSetMetaData;
	getMoreResults(): boolean;
	getMoreResults(arg0: number): boolean;
	getParameterMetaData(): ParameterMetaData;
	getQueryTimeout(): number;
	getResultSet(): ResultSet;
	getResultSetConcurrency(): number;
	getResultSetHoldability(): number;
	getResultSetType(): number;
	getUpdateCount(): number;
	getWarnings(): SQLWarning;
	isCloseOnCompletion(): boolean;
	isClosed(): boolean;
	isPoolable(): boolean;
	isWrapperFor(arg0: any): boolean;
	setArray(arg0: number, arg1: _Array): void;
	setAsciiStream(arg0: number, arg1: InputStream): void;
	setAsciiStream(arg0: number, arg1: InputStream, arg2: number): void;
	setAsciiStream(arg0: number, arg1: InputStream, arg2: number): void;
	setBigDecimal(arg0: number, arg1: any): void;
	setBinaryStream(arg0: number, arg1: InputStream): void;
	setBinaryStream(arg0: number, arg1: InputStream, arg2: number): void;
	setBinaryStream(arg0: number, arg1: InputStream, arg2: number): void;
	setBlob(arg0: number, arg1: Blob): void;
	setBlob(arg0: number, arg1: InputStream): void;
	setBlob(arg0: number, arg1: InputStream, arg2: number): void;
	setBoolean(arg0: number, arg1: boolean): void;
	setByte(arg0: number, arg1: number): void;
	setBytes(arg0: number, arg1: Array<number>): void;
	setCharacterStream(arg0: number, arg1: Reader): void;
	setCharacterStream(arg0: number, arg1: Reader, arg2: number): void;
	setCharacterStream(arg0: number, arg1: Reader, arg2: number): void;
	setClob(arg0: number, arg1: Clob): void;
	setClob(arg0: number, arg1: Reader): void;
	setClob(arg0: number, arg1: Reader, arg2: number): void;
	setCursorName(arg0: string): void;
	setDate(arg0: number, arg1: Date): void;
	setDate(arg0: number, arg1: Date, arg2: any): void;
	setDouble(arg0: number, arg1: number): void;
	setEscapeProcessing(arg0: boolean): void;
	setFetchDirection(arg0: number): void;
	setFetchSize(arg0: number): void;
	setFloat(arg0: number, arg1: number): void;
	setInt(arg0: number, arg1: number): void;
	setLargeMaxRows(arg0: number): void;
	setLong(arg0: number, arg1: number): void;
	setMaxFieldSize(arg0: number): void;
	setMaxRows(arg0: number): void;
	setNCharacterStream(arg0: number, arg1: Reader): void;
	setNCharacterStream(arg0: number, arg1: Reader, arg2: number): void;
	setNClob(arg0: number, arg1: Reader): void;
	setNClob(arg0: number, arg1: NClob): void;
	setNClob(arg0: number, arg1: Reader, arg2: number): void;
	setNString(arg0: number, arg1: string): void;
	setNull(arg0: number, arg1: number): void;
	setNull(arg0: number, arg1: number, arg2: string): void;
	setObject(arg0: number, arg1: any): void;
	setObject(arg0: number, arg1: any, arg2: number): void;
	setObject(arg0: number, arg1: any, arg2: SQLType): void;
	setObject(arg0: number, arg1: any, arg2: number, arg3: number): void;
	setObject(arg0: number, arg1: any, arg2: SQLType, arg3: number): void;
	setPoolable(arg0: boolean): void;
	setQueryTimeout(arg0: number): void;
	setRef(arg0: number, arg1: Ref): void;
	setRowId(arg0: number, arg1: RowId): void;
	setSQLXML(arg0: number, arg1: SQLXML): void;
	setShort(arg0: number, arg1: number): void;
	setString(arg0: number, arg1: string): void;
	setTime(arg0: number, arg1: Time): void;
	setTime(arg0: number, arg1: Time, arg2: any): void;
	setTimestamp(arg0: number, arg1: Timestamp): void;
	setTimestamp(arg0: number, arg1: Timestamp, arg2: any): void;
	setURL(arg0: number, arg1: any): void;
	setUnicodeStream(arg0: number, arg1: InputStream, arg2: number): void;
	unwrap(arg0: any): any;
}

export default class PreparedStatement {
	public static get $javaClass(): any {
		return Java.type('java.sql.PreparedStatement');
	}

	public static get CLOSE_ALL_RESULTS(): number {
		return PreparedStatement.$javaClass.CLOSE_ALL_RESULTS;
	}

	public static get CLOSE_CURRENT_RESULT(): number {
		return PreparedStatement.$javaClass.CLOSE_CURRENT_RESULT;
	}

	public static get EXECUTE_FAILED(): number {
		return PreparedStatement.$javaClass.EXECUTE_FAILED;
	}

	public static get KEEP_CURRENT_RESULT(): number {
		return PreparedStatement.$javaClass.KEEP_CURRENT_RESULT;
	}

	public static get NO_GENERATED_KEYS(): number {
		return PreparedStatement.$javaClass.NO_GENERATED_KEYS;
	}

	public static get RETURN_GENERATED_KEYS(): number {
		return PreparedStatement.$javaClass.RETURN_GENERATED_KEYS;
	}

	public static get SUCCESS_NO_INFO(): number {
		return PreparedStatement.$javaClass.SUCCESS_NO_INFO;
	}

}

