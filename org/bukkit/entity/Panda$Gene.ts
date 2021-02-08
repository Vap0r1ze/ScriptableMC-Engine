declare var Java: any;
import Class from '../../../java/lang/Class.js'
import Enum from '../../../java/lang/Enum.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'

export default interface Panda$Gene extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	isRecessive(): boolean;
	name(): string;
	ordinal(): number;
}

export default class Panda$Gene {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.entity.Panda$Gene');
	}
	public static $isInstance(obj: any): obj is Panda$Gene {
		return obj instanceof Panda$Gene.$javaClass;
	}

	public static get AGGRESSIVE(): Panda$Gene {
		return this.$javaClass.AGGRESSIVE;
	}
	public static get BROWN(): Panda$Gene {
		return this.$javaClass.BROWN;
	}
	public static get LAZY(): Panda$Gene {
		return this.$javaClass.LAZY;
	}
	public static get NORMAL(): Panda$Gene {
		return this.$javaClass.NORMAL;
	}
	public static get PLAYFUL(): Panda$Gene {
		return this.$javaClass.PLAYFUL;
	}
	public static get WEAK(): Panda$Gene {
		return this.$javaClass.WEAK;
	}
	public static get WORRIED(): Panda$Gene {
		return this.$javaClass.WORRIED;
	}
}

