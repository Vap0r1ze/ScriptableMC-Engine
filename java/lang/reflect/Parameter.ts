declare var Java: any;
import AnnotatedElement from './AnnotatedElement.js'
import AnnotatedType from './AnnotatedType.js'
import Annotation from '../../../java/lang/annotation/Annotation.js'
import Class from '../../../java/lang/Class.js'
import Executable from './Executable.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'
import Type from './Type.js'

export default interface Parameter extends Object, AnnotatedElement {
	getAnnotatedType(): AnnotatedType;
	getAnnotation(arg0: Class): Annotation;
	getAnnotations(): Array<Annotation>;
	getAnnotationsByType(arg0: Class): Array<Annotation>;
	getDeclaredAnnotation(arg0: Class): Annotation;
	getDeclaredAnnotations(): Array<Annotation>;
	getDeclaredAnnotationsByType(arg0: Class): Array<Annotation>;
	getDeclaringExecutable(): Executable;
	getModifiers(): number;
	getName(): string;
	getParameterizedType(): Type;
	getType(): Class;
	isAnnotationPresent(arg0: Class): boolean;
	isImplicit(): boolean;
	isNamePresent(): boolean;
	isSynthetic(): boolean;
	isVarArgs(): boolean;
}

export default class Parameter {
	public static get $javaClass(): any {
		return Java.type('java.lang.reflect.Parameter');
	}
	public static $isInstance(obj: any): obj is Parameter {
		return obj instanceof Parameter.$javaClass;
	}

}

