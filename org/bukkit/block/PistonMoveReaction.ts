declare var Java: any;
import Class from '../../../java/lang/Class.js'
import Enum from '../../../java/lang/Enum.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'

export default interface PistonMoveReaction extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	getId(): number;
	name(): string;
	ordinal(): number;
}

export default class PistonMoveReaction {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.PistonMoveReaction');
	}
	public static $isInstance(obj: any): obj is PistonMoveReaction {
		return obj instanceof PistonMoveReaction.$javaClass;
	}

	public static get BLOCK(): PistonMoveReaction {
		return this.$javaClass.BLOCK;
	}
	public static get BREAK(): PistonMoveReaction {
		return this.$javaClass.BREAK;
	}
	public static get IGNORE(): PistonMoveReaction {
		return this.$javaClass.IGNORE;
	}
	public static get MOVE(): PistonMoveReaction {
		return this.$javaClass.MOVE;
	}
	public static get PUSH_ONLY(): PistonMoveReaction {
		return this.$javaClass.PUSH_ONLY;
	}
}

