declare var Java: any;
import Class from './Class.js'
import Object from './Object.js'
import Serializable from '../../java/io/Serializable.js'
import String from './String.js'

export default interface StackTraceElement extends Object, Serializable {
	getClassName(): string;
	getFileName(): string;
	getLineNumber(): number;
	getMethodName(): string;
	isNativeMethod(): boolean;
}

export default class StackTraceElement {
	public static get $javaClass(): any {
		return Java.type('java.lang.StackTraceElement');
	}
	public static $isInstance(obj: any): obj is StackTraceElement {
		return obj instanceof StackTraceElement.$javaClass;
	}

	constructor(arg0: string, arg1: string, arg2: string, arg3: number);
	constructor(...args: any[]) {
		return new StackTraceElement.$javaClass(...args);
	}

}

