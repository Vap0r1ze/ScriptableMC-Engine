declare var Java: any;
import Class from '../../java/lang/Class.js'
import Consumer from './function/Consumer.js'
import Function from './function/Function.js'
import Object from '../../java/lang/Object.js'
import Predicate from './function/Predicate.js'
import String from '../../java/lang/String.js'
import Supplier from './function/Supplier.js'

export default interface Optional extends Object {
	filter(arg0: Predicate): Optional;
	flatMap(arg0: Function): Optional;
	get(): Object;
	ifPresent(arg0: Consumer): void;
	isPresent(): boolean;
	map(arg0: Function): Optional;
	orElse(arg0: Object): Object;
	orElseGet(arg0: Supplier): Object;
	orElseThrow(arg0: Supplier): Object;
}

export default class Optional {
	public static get $javaClass(): any {
		return Java.type('java.util.Optional');
	}
	public static $isInstance(obj: any): obj is Optional {
		return obj instanceof Optional.$javaClass;
	}

	public static empty(): Optional;
	public static empty(...args: any[]): any {
		return Optional.$javaClass.empty(...args);
	}

	public static of(arg0: Object): Optional;
	public static of(...args: any[]): any {
		return Optional.$javaClass.of(...args);
	}

	public static ofNullable(arg0: Object): Optional;
	public static ofNullable(...args: any[]): any {
		return Optional.$javaClass.ofNullable(...args);
	}

}

