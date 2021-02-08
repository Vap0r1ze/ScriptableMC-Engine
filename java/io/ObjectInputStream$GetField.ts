declare var Java: any;
import Class from '../../java/lang/Class.js'
import Object from '../../java/lang/Object.js'
import ObjectStreamClass from './ObjectStreamClass.js'
import String from '../../java/lang/String.js'

export default interface ObjectInputStream$GetField extends Object {
	defaulted(arg0: string): boolean;
	get(arg0: string, arg1: number): number;
	get(arg0: string, arg1: number): number;
	get(arg0: string, arg1: number): number;
	get(arg0: string, arg1: number): number;
	get(arg0: string, arg1: Object): Object;
	get(arg0: string, arg1: boolean): boolean;
	get(arg0: string, arg1: number): number;
	get(arg0: string, arg1: string): string;
	get(arg0: string, arg1: number): number;
	getObjectStreamClass(): ObjectStreamClass;
}

export default class ObjectInputStream$GetField {
	public static get $javaClass(): any {
		return Java.type('java.io.ObjectInputStream$GetField');
	}
	public static $isInstance(obj: any): obj is ObjectInputStream$GetField {
		return obj instanceof ObjectInputStream$GetField.$javaClass;
	}

	constructor();
	constructor(...args: any[]) {
		return new ObjectInputStream$GetField.$javaClass(...args);
	}

}

