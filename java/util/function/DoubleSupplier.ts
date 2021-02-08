declare var Java: any;

export default interface DoubleSupplier {
	getAsDouble(): number;
}

export default class DoubleSupplier {
	public static get $javaClass(): any {
		return Java.type('java.util.function.DoubleSupplier');
	}
	public static $isInstance(obj: any): obj is DoubleSupplier {
		return obj instanceof DoubleSupplier.$javaClass;
	}

}

