declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import Enum from '../../../../java/lang/Enum.js'
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'

export default interface PlayerFishEvent$State extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
}

export default class PlayerFishEvent$State {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerFishEvent$State');
	}
	public static $isInstance(obj: any): obj is PlayerFishEvent$State {
		return obj instanceof PlayerFishEvent$State.$javaClass;
	}

	public static get BITE(): PlayerFishEvent$State {
		return this.$javaClass.BITE;
	}
	public static get CAUGHT_ENTITY(): PlayerFishEvent$State {
		return this.$javaClass.CAUGHT_ENTITY;
	}
	public static get CAUGHT_FISH(): PlayerFishEvent$State {
		return this.$javaClass.CAUGHT_FISH;
	}
	public static get FAILED_ATTEMPT(): PlayerFishEvent$State {
		return this.$javaClass.FAILED_ATTEMPT;
	}
	public static get FISHING(): PlayerFishEvent$State {
		return this.$javaClass.FISHING;
	}
	public static get IN_GROUND(): PlayerFishEvent$State {
		return this.$javaClass.IN_GROUND;
	}
	public static get REEL_IN(): PlayerFishEvent$State {
		return this.$javaClass.REEL_IN;
	}
}

