declare var Java: any;

export default interface IntSupplier {
	getAsInt(): number;
}

export default class IntSupplier {
	public static get $javaClass(): any {
		return Java.type('java.util.function.IntSupplier');
	}
	public static $isInstance(obj: any): obj is IntSupplier {
		return obj instanceof IntSupplier.$javaClass;
	}

}

