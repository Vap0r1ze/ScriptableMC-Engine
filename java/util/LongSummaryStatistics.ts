declare var Java: any;
import Class from '../../java/lang/Class.js'
import IntConsumer from './function/IntConsumer.js'
import LongConsumer from './function/LongConsumer.js'
import Object from '../../java/lang/Object.js'
import String from '../../java/lang/String.js'

export default interface LongSummaryStatistics extends Object, LongConsumer, IntConsumer {
	accept(arg0: number): void;
	accept(arg0: number): void;
	andThen(arg0: LongConsumer): LongConsumer;
	andThen(arg0: IntConsumer): IntConsumer;
	combine(arg0: LongSummaryStatistics): void;
	getAverage(): number;
	getCount(): number;
	getMax(): number;
	getMin(): number;
	getSum(): number;
}

export default class LongSummaryStatistics {
	public static get $javaClass(): any {
		return Java.type('java.util.LongSummaryStatistics');
	}
	public static $isInstance(obj: any): obj is LongSummaryStatistics {
		return obj instanceof LongSummaryStatistics.$javaClass;
	}

	constructor();
	constructor(...args: any[]) {
		return new LongSummaryStatistics.$javaClass(...args);
	}

}

