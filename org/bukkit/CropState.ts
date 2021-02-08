declare var Java: any;
import Class from '../../java/lang/Class.js'
import Enum from '../../java/lang/Enum.js'
import Object from '../../java/lang/Object.js'
import String from '../../java/lang/String.js'

export default interface CropState extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getData(): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
}

export default class CropState {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.CropState');
	}
	public static $isInstance(obj: any): obj is CropState {
		return obj instanceof CropState.$javaClass;
	}

	public static get GERMINATED(): CropState {
		return this.$javaClass.GERMINATED;
	}
	public static get MEDIUM(): CropState {
		return this.$javaClass.MEDIUM;
	}
	public static get RIPE(): CropState {
		return this.$javaClass.RIPE;
	}
	public static get SEEDED(): CropState {
		return this.$javaClass.SEEDED;
	}
	public static get SMALL(): CropState {
		return this.$javaClass.SMALL;
	}
	public static get TALL(): CropState {
		return this.$javaClass.TALL;
	}
	public static get VERY_SMALL(): CropState {
		return this.$javaClass.VERY_SMALL;
	}
	public static get VERY_TALL(): CropState {
		return this.$javaClass.VERY_TALL;
	}
}

