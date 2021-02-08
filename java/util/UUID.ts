declare var Java: any;
import Class from '../../java/lang/Class.js'
import Comparable from '../../java/lang/Comparable.js'
import Object from '../../java/lang/Object.js'
import Serializable from '../../java/io/Serializable.js'
import String from '../../java/lang/String.js'

export default interface UUID extends Object, Serializable, Comparable {
	clockSequence(): number;
	compareTo(arg0: string): number;
	compareTo(arg0: Object): number;
	getLeastSignificantBits(): number;
	getMostSignificantBits(): number;
	node(): number;
	timestamp(): number;
	variant(): number;
	version(): number;
}

export default class UUID {
	public static get $javaClass(): any {
		return Java.type('java.util.UUID');
	}
	public static $isInstance(obj: any): obj is UUID {
		return obj instanceof UUID.$javaClass;
	}

	constructor(arg0: number, arg1: number);
	constructor(...args: any[]) {
		return new UUID.$javaClass(...args);
	}

	public static fromString(arg0: string): string;
	public static fromString(...args: any[]): any {
		return UUID.$javaClass.fromString(...args);
	}

	public static nameUUIDFromBytes(arg0: Array<number>): string;
	public static nameUUIDFromBytes(...args: any[]): any {
		return UUID.$javaClass.nameUUIDFromBytes(...args);
	}

	public static randomUUID(): string;
	public static randomUUID(...args: any[]): any {
		return UUID.$javaClass.randomUUID(...args);
	}

}

