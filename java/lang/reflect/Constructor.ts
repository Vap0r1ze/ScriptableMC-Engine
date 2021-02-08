declare var Java: any;
import AccessibleObject from './AccessibleObject.js'
import AnnotatedType from './AnnotatedType.js'
import Annotation from '../../../java/lang/annotation/Annotation.js'
import Class from '../../../java/lang/Class.js'
import Executable from './Executable.js'
import Object from '../../../java/lang/Object.js'
import Parameter from './Parameter.js'
import String from '../../../java/lang/String.js'
import Type from './Type.js'
import TypeVariable from './TypeVariable.js'

export default interface Constructor extends Executable {
	getAnnotatedExceptionTypes(): Array<AnnotatedType>;
	getAnnotatedParameterTypes(): Array<AnnotatedType>;
	getAnnotatedReceiverType(): AnnotatedType;
	getAnnotatedReturnType(): AnnotatedType;
	getAnnotation(arg0: Class): Annotation;
	getAnnotations(): Array<Annotation>;
	getAnnotationsByType(arg0: Class): Array<Annotation>;
	getDeclaredAnnotation(arg0: Class): Annotation;
	getDeclaredAnnotations(): Array<Annotation>;
	getDeclaredAnnotationsByType(arg0: Class): Array<Annotation>;
	getDeclaringClass(): Class;
	getExceptionTypes(): Array<Class>;
	getGenericExceptionTypes(): Array<Type>;
	getGenericParameterTypes(): Array<Type>;
	getModifiers(): number;
	getName(): string;
	getParameterAnnotations(): Array<Array<Annotation>>;
	getParameterCount(): number;
	getParameterTypes(): Array<Class>;
	getParameters(): Array<Parameter>;
	getTypeParameters(): Array<TypeVariable>;
	isAccessible(): boolean;
	isAnnotationPresent(arg0: Class): boolean;
	isSynthetic(): boolean;
	isVarArgs(): boolean;
	newInstance(arg0: Array<Object>): Object;
	setAccessible(arg0: boolean): void;
	toGenericString(): string;
}

export default class Constructor {
	public static get $javaClass(): any {
		return Java.type('java.lang.reflect.Constructor');
	}
	public static $isInstance(obj: any): obj is Constructor {
		return obj instanceof Constructor.$javaClass;
	}

	public static get DECLARED(): number {
		return Constructor.$javaClass.DECLARED;
	}

	public static get PUBLIC(): number {
		return Constructor.$javaClass.PUBLIC;
	}

	public static setAccessible(arg0: Array<AccessibleObject>, arg1: boolean): void;
	public static setAccessible(...args: any[]): any {
		return Constructor.$javaClass.setAccessible(...args);
	}

}

