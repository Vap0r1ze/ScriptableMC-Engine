declare var Java: any;

export default interface IntConsumer {
	accept(arg0: number): void;
	andThen(arg0: IntConsumer): IntConsumer;
}

export default class IntConsumer {
	public static get $javaClass(): any {
		return Java.type('java.util.function.IntConsumer');
	}
	public static $isInstance(obj: any): obj is IntConsumer {
		return obj instanceof IntConsumer.$javaClass;
	}

}

