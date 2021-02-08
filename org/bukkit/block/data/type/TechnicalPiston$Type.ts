declare var Java: any;
import Class from '../../../../../java/lang/Class.js'
import Enum from '../../../../../java/lang/Enum.js'
import Object from '../../../../../java/lang/Object.js'
import String from '../../../../../java/lang/String.js'

export default interface TechnicalPiston$Type extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
}

export default class TechnicalPiston$Type {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.TechnicalPiston$Type');
	}
	public static $isInstance(obj: any): obj is TechnicalPiston$Type {
		return obj instanceof TechnicalPiston$Type.$javaClass;
	}

	public static get NORMAL(): TechnicalPiston$Type {
		return this.$javaClass.NORMAL;
	}
	public static get STICKY(): TechnicalPiston$Type {
		return this.$javaClass.STICKY;
	}
}

