declare var Java: any;

export default interface Runnable {
	run(): void;
}

export default class Runnable {
	public static get $javaClass(): any {
		return Java.type('java.lang.Runnable');
	}
	public static $isInstance(obj: any): obj is Runnable {
		return obj instanceof Runnable.$javaClass;
	}

}

