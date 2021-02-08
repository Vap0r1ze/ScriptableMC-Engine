declare var Java: any;
import Class from '../../java/lang/Class.js'
import Enum from '../../java/lang/Enum.js'
import Object from '../../java/lang/Object.js'
import String from '../../java/lang/String.js'

export default interface GameMode extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	getValue(): number;
	name(): string;
	ordinal(): number;
}

export default class GameMode {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.GameMode');
	}
	public static $isInstance(obj: any): obj is GameMode {
		return obj instanceof GameMode.$javaClass;
	}

	public static get ADVENTURE(): GameMode {
		return this.$javaClass.ADVENTURE;
	}
	public static get CREATIVE(): GameMode {
		return this.$javaClass.CREATIVE;
	}
	public static get SPECTATOR(): GameMode {
		return this.$javaClass.SPECTATOR;
	}
	public static get SURVIVAL(): GameMode {
		return this.$javaClass.SURVIVAL;
	}
}

