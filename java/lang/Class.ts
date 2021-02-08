declare var Java: any;
import AnnotatedElement from './reflect/AnnotatedElement.js'
import AnnotatedType from './reflect/AnnotatedType.js'
import Annotation from './annotation/Annotation.js'
import ClassLoader from './ClassLoader.js'
import Constructor from './reflect/Constructor.js'
import Field from './reflect/Field.js'
import GenericDeclaration from './reflect/GenericDeclaration.js'
import InputStream from '../../java/io/InputStream.js'
import Method from './reflect/Method.js'
import Object from './Object.js'
import Package from './Package.js'
import Serializable from '../../java/io/Serializable.js'
import String from './String.js'
import Type from './reflect/Type.js'
import TypeVariable from './reflect/TypeVariable.js'

export default interface Class extends Object, Serializable, GenericDeclaration, Type, AnnotatedElement {
	asSubclass(arg0: Class): Class;
	cast(arg0: Object): Object;
	desiredAssertionStatus(): boolean;
	getAnnotatedInterfaces(): Array<AnnotatedType>;
	getAnnotatedSuperclass(): AnnotatedType;
	getAnnotation(arg0: Class): Annotation;
	getAnnotations(): Array<Annotation>;
	getAnnotationsByType(arg0: Class): Array<Annotation>;
	getCanonicalName(): string;
	getClassLoader(): ClassLoader;
	getClasses(): Array<Class>;
	getComponentType(): Class;
	getConstructor(arg0: Array<Class>): Constructor;
	getConstructors(): Array<Constructor>;
	getDeclaredAnnotation(arg0: Class): Annotation;
	getDeclaredAnnotations(): Array<Annotation>;
	getDeclaredAnnotationsByType(arg0: Class): Array<Annotation>;
	getDeclaredClasses(): Array<Class>;
	getDeclaredConstructor(arg0: Array<Class>): Constructor;
	getDeclaredConstructors(): Array<Constructor>;
	getDeclaredField(arg0: string): Field;
	getDeclaredFields(): Array<Field>;
	getDeclaredMethod(arg0: string, arg1: Array<Class>): Method;
	getDeclaredMethods(): Array<Method>;
	getDeclaringClass(): Class;
	getEnclosingClass(): Class;
	getEnclosingConstructor(): Constructor;
	getEnclosingMethod(): Method;
	getEnumConstants(): Array<Object>;
	getField(arg0: string): Field;
	getFields(): Array<Field>;
	getGenericInterfaces(): Array<Type>;
	getGenericSuperclass(): Type;
	getInterfaces(): Array<Class>;
	getMethod(arg0: string, arg1: Array<Class>): Method;
	getMethods(): Array<Method>;
	getModifiers(): number;
	getName(): string;
	getPackage(): Package;
	getProtectionDomain(): any;
	getResource(arg0: string): any;
	getResourceAsStream(arg0: string): InputStream;
	getSigners(): Array<Object>;
	getSimpleName(): string;
	getSuperclass(): Class;
	getTypeName(): string;
	getTypeParameters(): Array<TypeVariable>;
	isAnnotation(): boolean;
	isAnnotationPresent(arg0: Class): boolean;
	isAnonymousClass(): boolean;
	isArray(): boolean;
	isAssignableFrom(arg0: Class): boolean;
	isEnum(): boolean;
	isInstance(arg0: Object): boolean;
	isInterface(): boolean;
	isLocalClass(): boolean;
	isMemberClass(): boolean;
	isPrimitive(): boolean;
	isSynthetic(): boolean;
	newInstance(): Object;
	toGenericString(): string;
}

export default class Class {
	public static get $javaClass(): any {
		return Java.type('java.lang.Class');
	}
	public static $isInstance(obj: any): obj is Class {
		return obj instanceof Class.$javaClass;
	}

	public static forName(arg0: string): Class;
	public static forName(arg0: string, arg1: boolean, arg2: ClassLoader): Class;
	public static forName(...args: any[]): any {
		return Class.$javaClass.forName(...args);
	}

}

