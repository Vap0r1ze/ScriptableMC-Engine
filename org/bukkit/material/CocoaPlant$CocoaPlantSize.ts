declare var Java: any;
import Class from '../../../java/lang/Class.js'
import Enum from '../../../java/lang/Enum.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'

export default interface CocoaPlant$CocoaPlantSize extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
}

export default class CocoaPlant$CocoaPlantSize {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.CocoaPlant$CocoaPlantSize');
	}
	public static $isInstance(obj: any): obj is CocoaPlant$CocoaPlantSize {
		return obj instanceof CocoaPlant$CocoaPlantSize.$javaClass;
	}

	public static get LARGE(): CocoaPlant$CocoaPlantSize {
		return this.$javaClass.LARGE;
	}
	public static get MEDIUM(): CocoaPlant$CocoaPlantSize {
		return this.$javaClass.MEDIUM;
	}
	public static get SMALL(): CocoaPlant$CocoaPlantSize {
		return this.$javaClass.SMALL;
	}
}

