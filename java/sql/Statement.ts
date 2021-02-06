declare var Java: any;
import Connection from './Connection.js'
import ResultSet from './ResultSet.js'
import SQLWarning from './SQLWarning.js'
import Wrapper from './Wrapper.js'

export default interface Statement extends Wrapper {
	addBatch(arg0: string): void;
	cancel(): void;
	clearBatch(): void;
	clearWarnings(): void;
	close(): void;
	closeOnCompletion(): void;
	execute(arg0: string): boolean;
	execute(arg0: string, arg1: number): boolean;
	execute(arg0: string, arg1: Array<number>): boolean;
	execute(arg0: string, arg1: Array<string>): boolean;
	executeBatch(): Array<number>;
	executeLargeBatch(): Array<number>;
	executeLargeUpdate(arg0: string): number;
	executeLargeUpdate(arg0: string, arg1: Array<number>): number;
	executeLargeUpdate(arg0: string, arg1: number): number;
	executeLargeUpdate(arg0: string, arg1: Array<string>): number;
	executeQuery(arg0: string): ResultSet;
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
	getMoreResults(): boolean;
	getMoreResults(arg0: number): boolean;
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
	setCursorName(arg0: string): void;
	setEscapeProcessing(arg0: boolean): void;
	setFetchDirection(arg0: number): void;
	setFetchSize(arg0: number): void;
	setLargeMaxRows(arg0: number): void;
	setMaxFieldSize(arg0: number): void;
	setMaxRows(arg0: number): void;
	setPoolable(arg0: boolean): void;
	setQueryTimeout(arg0: number): void;
	unwrap(arg0: any): any;
}

export default class Statement {
	public static get $javaClass(): any {
		return Java.type('java.sql.Statement');
	}

	public static get CLOSE_ALL_RESULTS(): number {
		return Statement.$javaClass.CLOSE_ALL_RESULTS;
	}

	public static get CLOSE_CURRENT_RESULT(): number {
		return Statement.$javaClass.CLOSE_CURRENT_RESULT;
	}

	public static get EXECUTE_FAILED(): number {
		return Statement.$javaClass.EXECUTE_FAILED;
	}

	public static get KEEP_CURRENT_RESULT(): number {
		return Statement.$javaClass.KEEP_CURRENT_RESULT;
	}

	public static get NO_GENERATED_KEYS(): number {
		return Statement.$javaClass.NO_GENERATED_KEYS;
	}

	public static get RETURN_GENERATED_KEYS(): number {
		return Statement.$javaClass.RETURN_GENERATED_KEYS;
	}

	public static get SUCCESS_NO_INFO(): number {
		return Statement.$javaClass.SUCCESS_NO_INFO;
	}

}

