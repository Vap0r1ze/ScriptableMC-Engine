declare var Java: any;
import Class from '../../java/lang/Class.js'
import IntConsumer from './function/IntConsumer.js'
import Object from '../../java/lang/Object.js'
import String from '../../java/lang/String.js'

export default interface IntSummaryStatistics extends Object, IntConsumer {
	accept(arg0: number): void;
	andThen(arg0: IntConsumer): IntConsumer;
	combine(arg0: IntSummaryStatistics): void;
	getAverage(): number;
	getCount(): number;
	getMax(): number;
	getMin(): number;
	getSum(): number;
}

export default class IntSummaryStatistics {
	public static get $javaClass(): any {
		return Java.type('java.util.IntSummaryStatistics');
	}
	public static $isInstance(obj: any): obj is IntSummaryStatistics {
		return obj instanceof IntSummaryStatistics.$javaClass;
	}

	constructor();
	constructor(...args: any[]) {
		return new IntSummaryStatistics.$javaClass(...args);
	}

}

