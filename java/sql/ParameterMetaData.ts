declare var Java: any;
import Class from '../../java/lang/Class.js'
import Object from '../../java/lang/Object.js'
import String from '../../java/lang/String.js'
import Wrapper from './Wrapper.js'

export default interface ParameterMetaData extends Wrapper {
	getParameterClassName(arg0: number): string;
	getParameterCount(): number;
	getParameterMode(arg0: number): number;
	getParameterType(arg0: number): number;
	getParameterTypeName(arg0: number): string;
	getPrecision(arg0: number): number;
	getScale(arg0: number): number;
	isNullable(arg0: number): number;
	isSigned(arg0: number): boolean;
	isWrapperFor(arg0: Class): boolean;
	unwrap(arg0: Class): Object;
}

export default class ParameterMetaData {
	public static get $javaClass(): any {
		return Java.type('java.sql.ParameterMetaData');
	}
	public static $isInstance(obj: any): obj is ParameterMetaData {
		return obj instanceof ParameterMetaData.$javaClass;
	}

	public static get parameterModeIn(): number {
		return ParameterMetaData.$javaClass.parameterModeIn;
	}

	public static get parameterModeInOut(): number {
		return ParameterMetaData.$javaClass.parameterModeInOut;
	}

	public static get parameterModeOut(): number {
		return ParameterMetaData.$javaClass.parameterModeOut;
	}

	public static get parameterModeUnknown(): number {
		return ParameterMetaData.$javaClass.parameterModeUnknown;
	}

	public static get parameterNoNulls(): number {
		return ParameterMetaData.$javaClass.parameterNoNulls;
	}

	public static get parameterNullable(): number {
		return ParameterMetaData.$javaClass.parameterNullable;
	}

	public static get parameterNullableUnknown(): number {
		return ParameterMetaData.$javaClass.parameterNullableUnknown;
	}

}

