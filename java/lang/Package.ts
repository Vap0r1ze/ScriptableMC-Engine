declare var Java: any;
import AnnotatedElement from './reflect/AnnotatedElement.js'
import Annotation from './annotation/Annotation.js'
import Class from './Class.js'
import Object from './Object.js'
import String from './String.js'

export default interface Package extends Object, AnnotatedElement {
	getAnnotation(arg0: Class): Annotation;
	getAnnotations(): Array<Annotation>;
	getAnnotationsByType(arg0: Class): Array<Annotation>;
	getDeclaredAnnotation(arg0: Class): Annotation;
	getDeclaredAnnotations(): Array<Annotation>;
	getDeclaredAnnotationsByType(arg0: Class): Array<Annotation>;
	getImplementationTitle(): string;
	getImplementationVendor(): string;
	getImplementationVersion(): string;
	getName(): string;
	getSpecificationTitle(): string;
	getSpecificationVendor(): string;
	getSpecificationVersion(): string;
	isAnnotationPresent(arg0: Class): boolean;
	isCompatibleWith(arg0: string): boolean;
	isSealed(): boolean;
	isSealed(arg0: any): boolean;
}

export default class Package {
	public static get $javaClass(): any {
		return Java.type('java.lang.Package');
	}
	public static $isInstance(obj: any): obj is Package {
		return obj instanceof Package.$javaClass;
	}

	public static getPackage(arg0: string): Package;
	public static getPackage(...args: any[]): any {
		return Package.$javaClass.getPackage(...args);
	}

	public static getPackages(): Array<Package>;
	public static getPackages(...args: any[]): any {
		return Package.$javaClass.getPackages(...args);
	}

}

