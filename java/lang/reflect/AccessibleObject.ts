declare var Java: any;
import AnnotatedElement from './AnnotatedElement.js'
import Annotation from '../../../java/lang/annotation/Annotation.js'
import Class from '../../../java/lang/Class.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'

export default interface AccessibleObject extends Object, AnnotatedElement {
	getAnnotation(arg0: Class): Annotation;
	getAnnotations(): Array<Annotation>;
	getAnnotationsByType(arg0: Class): Array<Annotation>;
	getDeclaredAnnotation(arg0: Class): Annotation;
	getDeclaredAnnotations(): Array<Annotation>;
	getDeclaredAnnotationsByType(arg0: Class): Array<Annotation>;
	isAccessible(): boolean;
	isAnnotationPresent(arg0: Class): boolean;
	setAccessible(arg0: boolean): void;
}

export default class AccessibleObject {
	public static get $javaClass(): any {
		return Java.type('java.lang.reflect.AccessibleObject');
	}
	public static $isInstance(obj: any): obj is AccessibleObject {
		return obj instanceof AccessibleObject.$javaClass;
	}

	public static setAccessible(arg0: Array<AccessibleObject>, arg1: boolean): void;
	public static setAccessible(...args: any[]): any {
		return AccessibleObject.$javaClass.setAccessible(...args);
	}

}

