declare var Java: any;
import Class from '../../java/lang/Class.js'
import Object from '../../java/lang/Object.js'
import ObjectOutput from './ObjectOutput.js'
import String from '../../java/lang/String.js'

export default interface ObjectOutputStream$PutField extends Object {
	put(arg0: string, arg1: number): void;
	put(arg0: string, arg1: number): void;
	put(arg0: string, arg1: number): void;
	put(arg0: string, arg1: number): void;
	put(arg0: string, arg1: Object): void;
	put(arg0: string, arg1: boolean): void;
	put(arg0: string, arg1: number): void;
	put(arg0: string, arg1: string): void;
	put(arg0: string, arg1: number): void;
	write(arg0: ObjectOutput): void;
}

export default class ObjectOutputStream$PutField {
	public static get $javaClass(): any {
		return Java.type('java.io.ObjectOutputStream$PutField');
	}
	public static $isInstance(obj: any): obj is ObjectOutputStream$PutField {
		return obj instanceof ObjectOutputStream$PutField.$javaClass;
	}

	constructor();
	constructor(...args: any[]) {
		return new ObjectOutputStream$PutField.$javaClass(...args);
	}

}

