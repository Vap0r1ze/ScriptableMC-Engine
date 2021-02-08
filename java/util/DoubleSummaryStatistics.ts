declare var Java: any;
import Class from '../../java/lang/Class.js'
import DoubleConsumer from './function/DoubleConsumer.js'
import Object from '../../java/lang/Object.js'
import String from '../../java/lang/String.js'

export default interface DoubleSummaryStatistics extends Object, DoubleConsumer {
	accept(arg0: number): void;
	andThen(arg0: DoubleConsumer): DoubleConsumer;
	combine(arg0: DoubleSummaryStatistics): void;
	getAverage(): number;
	getCount(): number;
	getMax(): number;
	getMin(): number;
	getSum(): number;
}

export default class DoubleSummaryStatistics {
	public static get $javaClass(): any {
		return Java.type('java.util.DoubleSummaryStatistics');
	}
	public static $isInstance(obj: any): obj is DoubleSummaryStatistics {
		return obj instanceof DoubleSummaryStatistics.$javaClass;
	}

	constructor();
	constructor(...args: any[]) {
		return new DoubleSummaryStatistics.$javaClass(...args);
	}

}

