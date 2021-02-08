declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import Enum from '../../../../java/lang/Enum.js'
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'

export default interface UsageMode extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
}

export default class UsageMode {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.structure.UsageMode');
	}
	public static $isInstance(obj: any): obj is UsageMode {
		return obj instanceof UsageMode.$javaClass;
	}

	public static get CORNER(): UsageMode {
		return this.$javaClass.CORNER;
	}
	public static get DATA(): UsageMode {
		return this.$javaClass.DATA;
	}
	public static get LOAD(): UsageMode {
		return this.$javaClass.LOAD;
	}
	public static get SAVE(): UsageMode {
		return this.$javaClass.SAVE;
	}
}

