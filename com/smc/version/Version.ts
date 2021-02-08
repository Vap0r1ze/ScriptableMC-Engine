declare var Java: any;
import Class from '../../../java/lang/Class.js'
import Comparable from '../../../java/lang/Comparable.js'
import Comparator from '../../../java/util/Comparator.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'

export default interface Version extends Object, Comparable {
	compareTo(arg0: Object): number;
	compareTo(other: Version): number;
	getBuild(): number;
	getMajor(): number;
	getMinor(): number;
	getVersion(): string;
	isAfter(other: Version): boolean;
	isAfterOrEq(other: Version): boolean;
	isBefore(other: Version): boolean;
	isBeforeOrEq(other: Version): boolean;
	isBetween(o1: Version, o2: Version): boolean;
}

export default class Version {
	public static get $javaClass(): any {
		return Java.type('com.smc.version.Version');
	}
	public static $isInstance(obj: any): obj is Version {
		return obj instanceof Version.$javaClass;
	}

	constructor(major: number, minor: number, build: number, $constructor_marker: any);
	constructor(...args: any[]) {
		return new Version.$javaClass(...args);
	}

	public static access$getCOMPARATOR$cp(): Comparator;
	public static access$getCOMPARATOR$cp(...args: any[]): any {
		return Version.$javaClass.access$getCOMPARATOR$cp(...args);
	}

	public static getCOMPARATOR(): Comparator;
	public static getCOMPARATOR(...args: any[]): any {
		return Version.$javaClass.getCOMPARATOR(...args);
	}

	public static of(major: number, minor: number, build: number): Version;
	public static of(...args: any[]): any {
		return Version.$javaClass.of(...args);
	}

	public static parse(version: string): Version;
	public static parse(...args: any[]): any {
		return Version.$javaClass.parse(...args);
	}

}

