declare var Java: any;
import Class from '../../../java/lang/Class.js'
import Enum from '../../../java/lang/Enum.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'

export default interface DragonBattle$RespawnPhase extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
}

export default class DragonBattle$RespawnPhase {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.boss.DragonBattle$RespawnPhase');
	}
	public static $isInstance(obj: any): obj is DragonBattle$RespawnPhase {
		return obj instanceof DragonBattle$RespawnPhase.$javaClass;
	}

	public static get END(): DragonBattle$RespawnPhase {
		return this.$javaClass.END;
	}
	public static get NONE(): DragonBattle$RespawnPhase {
		return this.$javaClass.NONE;
	}
	public static get PREPARING_TO_SUMMON_PILLARS(): DragonBattle$RespawnPhase {
		return this.$javaClass.PREPARING_TO_SUMMON_PILLARS;
	}
	public static get START(): DragonBattle$RespawnPhase {
		return this.$javaClass.START;
	}
	public static get SUMMONING_DRAGON(): DragonBattle$RespawnPhase {
		return this.$javaClass.SUMMONING_DRAGON;
	}
	public static get SUMMONING_PILLARS(): DragonBattle$RespawnPhase {
		return this.$javaClass.SUMMONING_PILLARS;
	}
}

