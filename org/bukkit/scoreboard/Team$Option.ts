declare var Java: any;
import Class from '../../../java/lang/Class.js'
import Enum from '../../../java/lang/Enum.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'

export default interface Team$Option extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
}

export default class Team$Option {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.scoreboard.Team$Option');
	}
	public static $isInstance(obj: any): obj is Team$Option {
		return obj instanceof Team$Option.$javaClass;
	}

	public static get COLLISION_RULE(): Team$Option {
		return this.$javaClass.COLLISION_RULE;
	}
	public static get DEATH_MESSAGE_VISIBILITY(): Team$Option {
		return this.$javaClass.DEATH_MESSAGE_VISIBILITY;
	}
	public static get NAME_TAG_VISIBILITY(): Team$Option {
		return this.$javaClass.NAME_TAG_VISIBILITY;
	}
}

