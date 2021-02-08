declare var Java: any;
import AnnotatedElement from './AnnotatedElement.js'
import Annotation from '../../../java/lang/annotation/Annotation.js'
import Class from '../../../java/lang/Class.js'
import TypeVariable from './TypeVariable.js'

export default interface GenericDeclaration extends AnnotatedElement {
	getAnnotation(arg0: Class): Annotation;
	getAnnotations(): Array<Annotation>;
	getAnnotationsByType(arg0: Class): Array<Annotation>;
	getDeclaredAnnotation(arg0: Class): Annotation;
	getDeclaredAnnotations(): Array<Annotation>;
	getDeclaredAnnotationsByType(arg0: Class): Array<Annotation>;
	getTypeParameters(): Array<TypeVariable>;
	isAnnotationPresent(arg0: Class): boolean;
}

export default class GenericDeclaration {
	public static get $javaClass(): any {
		return Java.type('java.lang.reflect.GenericDeclaration');
	}
	public static $isInstance(obj: any): obj is GenericDeclaration {
		return obj instanceof GenericDeclaration.$javaClass;
	}

}

