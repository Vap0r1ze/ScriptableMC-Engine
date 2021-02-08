declare var Java: any;
import Function from './function/Function.js'
import Object from '../../java/lang/Object.js'
import ToDoubleFunction from './function/ToDoubleFunction.js'
import ToIntFunction from './function/ToIntFunction.js'
import ToLongFunction from './function/ToLongFunction.js'

export default interface Comparator {
	compare(arg0: Object, arg1: Object): number;
	reversed(): Comparator;
	thenComparing(arg0: Function): Comparator;
	thenComparing(arg0: Comparator): Comparator;
	thenComparing(arg0: Function, arg1: Comparator): Comparator;
	thenComparingDouble(arg0: ToDoubleFunction): Comparator;
	thenComparingInt(arg0: ToIntFunction): Comparator;
	thenComparingLong(arg0: ToLongFunction): Comparator;
}

export default class Comparator {
	public static get $javaClass(): any {
		return Java.type('java.util.Comparator');
	}
	public static $isInstance(obj: any): obj is Comparator {
		return obj instanceof Comparator.$javaClass;
	}

	public static comparing(arg0: Function): Comparator;
	public static comparing(arg0: Function, arg1: Comparator): Comparator;
	public static comparing(...args: any[]): any {
		return Comparator.$javaClass.comparing(...args);
	}

	public static comparingDouble(arg0: ToDoubleFunction): Comparator;
	public static comparingDouble(...args: any[]): any {
		return Comparator.$javaClass.comparingDouble(...args);
	}

	public static comparingInt(arg0: ToIntFunction): Comparator;
	public static comparingInt(...args: any[]): any {
		return Comparator.$javaClass.comparingInt(...args);
	}

	public static comparingLong(arg0: ToLongFunction): Comparator;
	public static comparingLong(...args: any[]): any {
		return Comparator.$javaClass.comparingLong(...args);
	}

	public static naturalOrder(): Comparator;
	public static naturalOrder(...args: any[]): any {
		return Comparator.$javaClass.naturalOrder(...args);
	}

	public static nullsFirst(arg0: Comparator): Comparator;
	public static nullsFirst(...args: any[]): any {
		return Comparator.$javaClass.nullsFirst(...args);
	}

	public static nullsLast(arg0: Comparator): Comparator;
	public static nullsLast(...args: any[]): any {
		return Comparator.$javaClass.nullsLast(...args);
	}

	public static reverseOrder(): Comparator;
	public static reverseOrder(...args: any[]): any {
		return Comparator.$javaClass.reverseOrder(...args);
	}

}

