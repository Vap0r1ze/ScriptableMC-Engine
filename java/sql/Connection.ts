declare var Java: any;
import AutoCloseable from '../../java/lang/AutoCloseable.js'
import Blob from './Blob.js'
import CallableStatement from './CallableStatement.js'
import Class from '../../java/lang/Class.js'
import Clob from './Clob.js'
import DatabaseMetaData from './DatabaseMetaData.js'
import Executor from '../../java/util/concurrent/Executor.js'
import Map from '../../java/util/Map.js'
import NClob from './NClob.js'
import Object from '../../java/lang/Object.js'
import PreparedStatement from './PreparedStatement.js'
import Properties from '../../java/util/Properties.js'
import SQLWarning from './SQLWarning.js'
import SQLXML from './SQLXML.js'
import Savepoint from './Savepoint.js'
import Statement from './Statement.js'
import String from '../../java/lang/String.js'
import Struct from './Struct.js'
import Wrapper from './Wrapper.js'
import _Array from './Array.js'

export default interface Connection extends Wrapper, AutoCloseable {
	abort(arg0: Executor): void;
	clearWarnings(): void;
	close(): void;
	commit(): void;
	createArrayOf(arg0: string, arg1: Array<Object>): _Array;
	createBlob(): Blob;
	createClob(): Clob;
	createNClob(): NClob;
	createSQLXML(): SQLXML;
	createStatement(): Statement;
	createStatement(arg0: number, arg1: number): Statement;
	createStatement(arg0: number, arg1: number, arg2: number): Statement;
	createStruct(arg0: string, arg1: Array<Object>): Struct;
	getAutoCommit(): boolean;
	getCatalog(): string;
	getClientInfo(): Properties;
	getClientInfo(arg0: string): string;
	getHoldability(): number;
	getMetaData(): DatabaseMetaData;
	getNetworkTimeout(): number;
	getSchema(): string;
	getTransactionIsolation(): number;
	getTypeMap(): Map;
	getWarnings(): SQLWarning;
	isClosed(): boolean;
	isReadOnly(): boolean;
	isValid(arg0: number): boolean;
	isWrapperFor(arg0: Class): boolean;
	nativeSQL(arg0: string): string;
	prepareCall(arg0: string): CallableStatement;
	prepareCall(arg0: string, arg1: number, arg2: number): CallableStatement;
	prepareCall(arg0: string, arg1: number, arg2: number, arg3: number): CallableStatement;
	prepareStatement(arg0: string): PreparedStatement;
	prepareStatement(arg0: string, arg1: Array<string>): PreparedStatement;
	prepareStatement(arg0: string, arg1: number): PreparedStatement;
	prepareStatement(arg0: string, arg1: Array<number>): PreparedStatement;
	prepareStatement(arg0: string, arg1: number, arg2: number): PreparedStatement;
	prepareStatement(arg0: string, arg1: number, arg2: number, arg3: number): PreparedStatement;
	releaseSavepoint(arg0: Savepoint): void;
	rollback(): void;
	rollback(arg0: Savepoint): void;
	setAutoCommit(arg0: boolean): void;
	setCatalog(arg0: string): void;
	setClientInfo(arg0: Properties): void;
	setClientInfo(arg0: string, arg1: string): void;
	setHoldability(arg0: number): void;
	setNetworkTimeout(arg0: Executor, arg1: number): void;
	setReadOnly(arg0: boolean): void;
	setSavepoint(): Savepoint;
	setSavepoint(arg0: string): Savepoint;
	setSchema(arg0: string): void;
	setTransactionIsolation(arg0: number): void;
	setTypeMap(arg0: Map): void;
	unwrap(arg0: Class): Object;
}

export default class Connection {
	public static get $javaClass(): any {
		return Java.type('java.sql.Connection');
	}
	public static $isInstance(obj: any): obj is Connection {
		return obj instanceof Connection.$javaClass;
	}

	public static get TRANSACTION_NONE(): number {
		return Connection.$javaClass.TRANSACTION_NONE;
	}

	public static get TRANSACTION_READ_COMMITTED(): number {
		return Connection.$javaClass.TRANSACTION_READ_COMMITTED;
	}

	public static get TRANSACTION_READ_UNCOMMITTED(): number {
		return Connection.$javaClass.TRANSACTION_READ_UNCOMMITTED;
	}

	public static get TRANSACTION_REPEATABLE_READ(): number {
		return Connection.$javaClass.TRANSACTION_REPEATABLE_READ;
	}

	public static get TRANSACTION_SERIALIZABLE(): number {
		return Connection.$javaClass.TRANSACTION_SERIALIZABLE;
	}

}

