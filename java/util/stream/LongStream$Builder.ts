declare var Java: any;
import LongConsumer from '../../../java/util/function/LongConsumer.js'
import LongStream from './LongStream.js'

export default interface LongStream$Builder extends LongConsumer {
	accept(arg0: number): void;
	add(arg0: number): LongStream$Builder;
	andThen(arg0: LongConsumer): LongConsumer;
	build(): LongStream;
}

export default class LongStream$Builder {
	public static get $javaClass(): any {
		return Java.type('java.util.stream.LongStream$Builder');
	}
	public static $isInstance(obj: any): obj is LongStream$Builder {
		return obj instanceof LongStream$Builder.$javaClass;
	}

}

