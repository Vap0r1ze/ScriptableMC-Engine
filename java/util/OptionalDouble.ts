declare var Java: any;
import Class from '../../java/lang/Class.js'
import DoubleConsumer from './function/DoubleConsumer.js'
import DoubleSupplier from './function/DoubleSupplier.js'
import Object from '../../java/lang/Object.js'
import String from '../../java/lang/String.js'
import Supplier from './function/Supplier.js'

export default interface OptionalDouble extends Object {
	getAsDouble(): number;
	ifPresent(arg0: DoubleConsumer): void;
	isPresent(): boolean;
	orElse(arg0: number): number;
	orElseGet(arg0: DoubleSupplier): number;
	orElseThrow(arg0: Supplier): number;
}

export default class OptionalDouble {
	public static get $javaClass(): any {
		return Java.type('java.util.OptionalDouble');
	}
	public static $isInstance(obj: any): obj is OptionalDouble {
		return obj instanceof OptionalDouble.$javaClass;
	}

	public static empty(): OptionalDouble;
	public static empty(...args: any[]): any {
		return OptionalDouble.$javaClass.empty(...args);
	}

	public static of(arg0: number): OptionalDouble;
	public static of(...args: any[]): any {
		return OptionalDouble.$javaClass.of(...args);
	}

}

