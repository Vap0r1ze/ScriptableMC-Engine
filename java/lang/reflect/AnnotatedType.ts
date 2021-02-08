declare var Java: any;
import AnnotatedElement from './AnnotatedElement.js'
import Annotation from '../../../java/lang/annotation/Annotation.js'
import Class from '../../../java/lang/Class.js'
import Type from './Type.js'

export default interface AnnotatedType extends AnnotatedElement {
	getAnnotation(arg0: Class): Annotation;
	getAnnotations(): Array<Annotation>;
	getAnnotationsByType(arg0: Class): Array<Annotation>;
	getDeclaredAnnotation(arg0: Class): Annotation;
	getDeclaredAnnotations(): Array<Annotation>;
	getDeclaredAnnotationsByType(arg0: Class): Array<Annotation>;
	getType(): Type;
	isAnnotationPresent(arg0: Class): boolean;
}

export default class AnnotatedType {
	public static get $javaClass(): any {
		return Java.type('java.lang.reflect.AnnotatedType');
	}
	public static $isInstance(obj: any): obj is AnnotatedType {
		return obj instanceof AnnotatedType.$javaClass;
	}

}

