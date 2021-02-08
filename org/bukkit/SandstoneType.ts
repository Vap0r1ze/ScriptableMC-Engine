declare var Java: any;
import Class from '../../java/lang/Class.js'
import Enum from '../../java/lang/Enum.js'
import Object from '../../java/lang/Object.js'
import String from '../../java/lang/String.js'

export default interface SandstoneType extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getData(): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
}

export default class SandstoneType {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.SandstoneType');
	}
	public static $isInstance(obj: any): obj is SandstoneType {
		return obj instanceof SandstoneType.$javaClass;
	}

	public static get CRACKED(): SandstoneType {
		return this.$javaClass.CRACKED;
	}
	public static get GLYPHED(): SandstoneType {
		return this.$javaClass.GLYPHED;
	}
	public static get SMOOTH(): SandstoneType {
		return this.$javaClass.SMOOTH;
	}
}

