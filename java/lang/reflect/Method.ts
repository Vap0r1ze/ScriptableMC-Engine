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

export default interface Method extends Executable {
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
	getDefaultValue(): Object;
	getExceptionTypes(): Array<Class>;
	getGenericExceptionTypes(): Array<Type>;
	getGenericParameterTypes(): Array<Type>;
	getGenericReturnType(): Type;
	getModifiers(): number;
	getName(): string;
	getParameterAnnotations(): Array<Array<Annotation>>;
	getParameterCount(): number;
	getParameterTypes(): Array<Class>;
	getParameters(): Array<Parameter>;
	getReturnType(): Class;
	getTypeParameters(): Array<TypeVariable>;
	invoke(arg0: Object, arg1: Array<Object>): Object;
	isAccessible(): boolean;
	isAnnotationPresent(arg0: Class): boolean;
	isBridge(): boolean;
	isDefault(): boolean;
	isSynthetic(): boolean;
	isVarArgs(): boolean;
	setAccessible(arg0: boolean): void;
	toGenericString(): string;
}

export default class Method {
	public static get $javaClass(): any {
		return Java.type('java.lang.reflect.Method');
	}
	public static $isInstance(obj: any): obj is Method {
		return obj instanceof Method.$javaClass;
	}

	public static get DECLARED(): number {
		return Method.$javaClass.DECLARED;
	}

	public static get PUBLIC(): number {
		return Method.$javaClass.PUBLIC;
	}

	public static setAccessible(arg0: Array<AccessibleObject>, arg1: boolean): void;
	public static setAccessible(...args: any[]): any {
		return Method.$javaClass.setAccessible(...args);
	}

}

