declare var Java: any;

export default interface LongConsumer {
	accept(arg0: number): void;
	andThen(arg0: LongConsumer): LongConsumer;
}

export default class LongConsumer {
	public static get $javaClass(): any {
		return Java.type('java.util.function.LongConsumer');
	}
	public static $isInstance(obj: any): obj is LongConsumer {
		return obj instanceof LongConsumer.$javaClass;
	}

}

