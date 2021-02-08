declare var Java: any;
import Class from '../../java/lang/Class.js'
import Enum from '../../java/lang/Enum.js'
import Object from '../../java/lang/Object.js'
import String from '../../java/lang/String.js'

export default interface SoundCategory extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
}

export default class SoundCategory {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.SoundCategory');
	}
	public static $isInstance(obj: any): obj is SoundCategory {
		return obj instanceof SoundCategory.$javaClass;
	}

	public static get AMBIENT(): SoundCategory {
		return this.$javaClass.AMBIENT;
	}
	public static get BLOCKS(): SoundCategory {
		return this.$javaClass.BLOCKS;
	}
	public static get HOSTILE(): SoundCategory {
		return this.$javaClass.HOSTILE;
	}
	public static get MASTER(): SoundCategory {
		return this.$javaClass.MASTER;
	}
	public static get MUSIC(): SoundCategory {
		return this.$javaClass.MUSIC;
	}
	public static get NEUTRAL(): SoundCategory {
		return this.$javaClass.NEUTRAL;
	}
	public static get PLAYERS(): SoundCategory {
		return this.$javaClass.PLAYERS;
	}
	public static get RECORDS(): SoundCategory {
		return this.$javaClass.RECORDS;
	}
	public static get VOICE(): SoundCategory {
		return this.$javaClass.VOICE;
	}
	public static get WEATHER(): SoundCategory {
		return this.$javaClass.WEATHER;
	}
}

