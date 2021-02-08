declare var Java: any;
import Class from './Class.js'
import Enumeration from '../../java/util/Enumeration.js'
import InputStream from '../../java/io/InputStream.js'
import Object from './Object.js'
import String from './String.js'

export default interface ClassLoader extends Object {
	clearAssertionStatus(): void;
	getParent(): ClassLoader;
	getResource(arg0: string): any;
	getResourceAsStream(arg0: string): InputStream;
	getResources(arg0: string): Enumeration;
	loadClass(arg0: string): Class;
	setClassAssertionStatus(arg0: string, arg1: boolean): void;
	setDefaultAssertionStatus(arg0: boolean): void;
	setPackageAssertionStatus(arg0: string, arg1: boolean): void;
}

export default class ClassLoader {
	public static get $javaClass(): any {
		return Java.type('java.lang.ClassLoader');
	}
	public static $isInstance(obj: any): obj is ClassLoader {
		return obj instanceof ClassLoader.$javaClass;
	}

	public static getSystemClassLoader(): ClassLoader;
	public static getSystemClassLoader(...args: any[]): any {
		return ClassLoader.$javaClass.getSystemClassLoader(...args);
	}

	public static getSystemResource(arg0: string): any;
	public static getSystemResource(...args: any[]): any {
		return ClassLoader.$javaClass.getSystemResource(...args);
	}

	public static getSystemResourceAsStream(arg0: string): InputStream;
	public static getSystemResourceAsStream(...args: any[]): any {
		return ClassLoader.$javaClass.getSystemResourceAsStream(...args);
	}

	public static getSystemResources(arg0: string): Enumeration;
	public static getSystemResources(...args: any[]): any {
		return ClassLoader.$javaClass.getSystemResources(...args);
	}

}

