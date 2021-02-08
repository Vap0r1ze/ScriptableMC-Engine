declare var Java: any;

export default interface AutoCloseable {
	close(): void;
}

export default class AutoCloseable {
	public static get $javaClass(): any {
		return Java.type('java.lang.AutoCloseable');
	}
	public static $isInstance(obj: any): obj is AutoCloseable {
		return obj instanceof AutoCloseable.$javaClass;
	}

}

