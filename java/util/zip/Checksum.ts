declare var Java: any;

export default interface Checksum {
	getValue(): number;
	reset(): void;
	update(arg0: number): void;
	update(arg0: Array<number>, arg1: number, arg2: number): void;
}

export default class Checksum {
	public static get $javaClass(): any {
		return Java.type('java.util.zip.Checksum');
	}
	public static $isInstance(obj: any): obj is Checksum {
		return obj instanceof Checksum.$javaClass;
	}

}

