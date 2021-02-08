declare var Java: any;
import DoubleConsumer from '../../../java/util/function/DoubleConsumer.js'
import DoubleStream from './DoubleStream.js'

export default interface DoubleStream$Builder extends DoubleConsumer {
	accept(arg0: number): void;
	add(arg0: number): DoubleStream$Builder;
	andThen(arg0: DoubleConsumer): DoubleConsumer;
	build(): DoubleStream;
}

export default class DoubleStream$Builder {
	public static get $javaClass(): any {
		return Java.type('java.util.stream.DoubleStream$Builder');
	}
	public static $isInstance(obj: any): obj is DoubleStream$Builder {
		return obj instanceof DoubleStream$Builder.$javaClass;
	}

}

