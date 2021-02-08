declare var Java: any;
import AccessibleObject from './AccessibleObject.js'
import AnnotatedType from './AnnotatedType.js'
import Annotation from '../../../java/lang/annotation/Annotation.js'
import Class from '../../../java/lang/Class.js'
import GenericDeclaration from './GenericDeclaration.js'
import Member from './Member.js'
import Object from '../../../java/lang/Object.js'
import Parameter from './Parameter.js'
import String from '../../../java/lang/String.js'
import Type from './Type.js'
import TypeVariable from './TypeVariable.js'

export default interface Executable extends AccessibleObject, Member, GenericDeclaration {
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
	setAccessible(arg0: boolean): void;
	toGenericString(): string;
}

export default class Executable {
	public static get $javaClass(): any {
		return Java.type('java.lang.reflect.Executable');
	}
	public static $isInstance(obj: any): obj is Executable {
		return obj instanceof Executable.$javaClass;
	}

	public static get DECLARED(): number {
		return Executable.$javaClass.DECLARED;
	}

	public static get PUBLIC(): number {
		return Executable.$javaClass.PUBLIC;
	}

	public static setAccessible(arg0: Array<AccessibleObject>, arg1: boolean): void;
	public static setAccessible(...args: any[]): any {
		return Executable.$javaClass.setAccessible(...args);
	}

}

