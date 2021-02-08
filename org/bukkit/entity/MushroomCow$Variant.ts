declare var Java: any;
import Class from '../../../java/lang/Class.js'
import Enum from '../../../java/lang/Enum.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'

export default interface MushroomCow$Variant extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
}

export default class MushroomCow$Variant {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.entity.MushroomCow$Variant');
	}
	public static $isInstance(obj: any): obj is MushroomCow$Variant {
		return obj instanceof MushroomCow$Variant.$javaClass;
	}

	public static get BROWN(): MushroomCow$Variant {
		return this.$javaClass.BROWN;
	}
	public static get RED(): MushroomCow$Variant {
		return this.$javaClass.RED;
	}
}

