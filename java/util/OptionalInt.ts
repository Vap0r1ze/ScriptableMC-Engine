declare var Java: any;
import Class from '../../java/lang/Class.js'
import IntConsumer from './function/IntConsumer.js'
import IntSupplier from './function/IntSupplier.js'
import Object from '../../java/lang/Object.js'
import String from '../../java/lang/String.js'
import Supplier from './function/Supplier.js'

export default interface OptionalInt extends Object {
	getAsInt(): number;
	ifPresent(arg0: IntConsumer): void;
	isPresent(): boolean;
	orElse(arg0: number): number;
	orElseGet(arg0: IntSupplier): number;
	orElseThrow(arg0: Supplier): number;
}

export default class OptionalInt {
	public static get $javaClass(): any {
		return Java.type('java.util.OptionalInt');
	}
	public static $isInstance(obj: any): obj is OptionalInt {
		return obj instanceof OptionalInt.$javaClass;
	}

	public static empty(): OptionalInt;
	public static empty(...args: any[]): any {
		return OptionalInt.$javaClass.empty(...args);
	}

	public static of(arg0: number): OptionalInt;
	public static of(...args: any[]): any {
		return OptionalInt.$javaClass.of(...args);
	}

}

