declare var Java: any;
import IntConsumer from '../../../java/util/function/IntConsumer.js'
import IntStream from './IntStream.js'

export default interface IntStream$Builder extends IntConsumer {
	accept(arg0: number): void;
	add(arg0: number): IntStream$Builder;
	andThen(arg0: IntConsumer): IntConsumer;
	build(): IntStream;
}

export default class IntStream$Builder {
	public static get $javaClass(): any {
		return Java.type('java.util.stream.IntStream$Builder');
	}
	public static $isInstance(obj: any): obj is IntStream$Builder {
		return obj instanceof IntStream$Builder.$javaClass;
	}

}

