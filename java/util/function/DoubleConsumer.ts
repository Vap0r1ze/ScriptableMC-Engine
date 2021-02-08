declare var Java: any;

export default interface DoubleConsumer {
	accept(arg0: number): void;
	andThen(arg0: DoubleConsumer): DoubleConsumer;
}

export default class DoubleConsumer {
	public static get $javaClass(): any {
		return Java.type('java.util.function.DoubleConsumer');
	}
	public static $isInstance(obj: any): obj is DoubleConsumer {
		return obj instanceof DoubleConsumer.$javaClass;
	}

}

