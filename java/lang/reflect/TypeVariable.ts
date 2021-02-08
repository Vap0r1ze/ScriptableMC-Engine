declare var Java: any;
import AnnotatedElement from './AnnotatedElement.js'
import AnnotatedType from './AnnotatedType.js'
import Annotation from '../../../java/lang/annotation/Annotation.js'
import Class from '../../../java/lang/Class.js'
import GenericDeclaration from './GenericDeclaration.js'
import String from '../../../java/lang/String.js'
import Type from './Type.js'

export default interface TypeVariable extends Type, AnnotatedElement {
	getAnnotatedBounds(): Array<AnnotatedType>;
	getAnnotation(arg0: Class): Annotation;
	getAnnotations(): Array<Annotation>;
	getAnnotationsByType(arg0: Class): Array<Annotation>;
	getBounds(): Array<Type>;
	getDeclaredAnnotation(arg0: Class): Annotation;
	getDeclaredAnnotations(): Array<Annotation>;
	getDeclaredAnnotationsByType(arg0: Class): Array<Annotation>;
	getGenericDeclaration(): GenericDeclaration;
	getName(): string;
	getTypeName(): string;
	isAnnotationPresent(arg0: Class): boolean;
}

export default class TypeVariable {
	public static get $javaClass(): any {
		return Java.type('java.lang.reflect.TypeVariable');
	}
	public static $isInstance(obj: any): obj is TypeVariable {
		return obj instanceof TypeVariable.$javaClass;
	}

}

