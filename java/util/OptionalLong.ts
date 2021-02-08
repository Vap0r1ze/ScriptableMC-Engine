declare var Java: any;
import Class from '../../java/lang/Class.js'
import LongConsumer from './function/LongConsumer.js'
import LongSupplier from './function/LongSupplier.js'
import Object from '../../java/lang/Object.js'
import String from '../../java/lang/String.js'
import Supplier from './function/Supplier.js'

export default interface OptionalLong extends Object {
	getAsLong(): number;
	ifPresent(arg0: LongConsumer): void;
	isPresent(): boolean;
	orElse(arg0: number): number;
	orElseGet(arg0: LongSupplier): number;
	orElseThrow(arg0: Supplier): number;
}

export default class OptionalLong {
	public static get $javaClass(): any {
		return Java.type('java.util.OptionalLong');
	}
	public static $isInstance(obj: any): obj is OptionalLong {
		return obj instanceof OptionalLong.$javaClass;
	}

	public static empty(): OptionalLong;
	public static empty(...args: any[]): any {
		return OptionalLong.$javaClass.empty(...args);
	}

	public static of(arg0: number): OptionalLong;
	public static of(...args: any[]): any {
		return OptionalLong.$javaClass.of(...args);
	}

}

