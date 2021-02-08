declare var Java: any;
import Annotation from '../../../java/lang/annotation/Annotation.js'
import Class from '../../../java/lang/Class.js'

export default interface AnnotatedElement {
	getAnnotation(arg0: Class): Annotation;
	getAnnotations(): Array<Annotation>;
	getAnnotationsByType(arg0: Class): Array<Annotation>;
	getDeclaredAnnotation(arg0: Class): Annotation;
	getDeclaredAnnotations(): Array<Annotation>;
	getDeclaredAnnotationsByType(arg0: Class): Array<Annotation>;
	isAnnotationPresent(arg0: Class): boolean;
}

export default class AnnotatedElement {
	public static get $javaClass(): any {
		return Java.type('java.lang.reflect.AnnotatedElement');
	}
	public static $isInstance(obj: any): obj is AnnotatedElement {
		return obj instanceof AnnotatedElement.$javaClass;
	}

}

