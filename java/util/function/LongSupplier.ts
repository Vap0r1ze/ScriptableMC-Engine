declare var Java: any;

export default interface LongSupplier {
	getAsLong(): number;
}

export default class LongSupplier {
	public static get $javaClass(): any {
		return Java.type('java.util.function.LongSupplier');
	}
	public static $isInstance(obj: any): obj is LongSupplier {
		return obj instanceof LongSupplier.$javaClass;
	}

}

