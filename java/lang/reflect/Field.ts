declare var Java: any;
import AccessibleObject from './AccessibleObject.js'
import AnnotatedType from './AnnotatedType.js'
import Annotation from '../../../java/lang/annotation/Annotation.js'
import Class from '../../../java/lang/Class.js'
import Member from './Member.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'
import Type from './Type.js'

export default interface Field extends AccessibleObject, Member {
	get(arg0: Object): Object;
	getAnnotatedType(): AnnotatedType;
	getAnnotation(arg0: Class): Annotation;
	getAnnotations(): Array<Annotation>;
	getAnnotationsByType(arg0: Class): Array<Annotation>;
	getBoolean(arg0: Object): boolean;
	getByte(arg0: Object): number;
	getChar(arg0: Object): string;
	getDeclaredAnnotation(arg0: Class): Annotation;
	getDeclaredAnnotations(): Array<Annotation>;
	getDeclaredAnnotationsByType(arg0: Class): Array<Annotation>;
	getDeclaringClass(): Class;
	getDouble(arg0: Object): number;
	getFloat(arg0: Object): number;
	getGenericType(): Type;
	getInt(arg0: Object): number;
	getLong(arg0: Object): number;
	getModifiers(): number;
	getName(): string;
	getShort(arg0: Object): number;
	getType(): Class;
	isAccessible(): boolean;
	isAnnotationPresent(arg0: Class): boolean;
	isEnumConstant(): boolean;
	isSynthetic(): boolean;
	set(arg0: Object, arg1: Object): void;
	setAccessible(arg0: boolean): void;
	setBoolean(arg0: Object, arg1: boolean): void;
	setByte(arg0: Object, arg1: number): void;
	setChar(arg0: Object, arg1: string): void;
	setDouble(arg0: Object, arg1: number): void;
	setFloat(arg0: Object, arg1: number): void;
	setInt(arg0: Object, arg1: number): void;
	setLong(arg0: Object, arg1: number): void;
	setShort(arg0: Object, arg1: number): void;
	toGenericString(): string;
}

export default class Field {
	public static get $javaClass(): any {
		return Java.type('java.lang.reflect.Field');
	}
	public static $isInstance(obj: any): obj is Field {
		return obj instanceof Field.$javaClass;
	}

	public static get DECLARED(): number {
		return Field.$javaClass.DECLARED;
	}

	public static get PUBLIC(): number {
		return Field.$javaClass.PUBLIC;
	}

	public static setAccessible(arg0: Array<AccessibleObject>, arg1: boolean): void;
	public static setAccessible(...args: any[]): any {
		return Field.$javaClass.setAccessible(...args);
	}

}

