declare var Java: any;
import Class from '../../java/lang/Class.js'
import Enum from '../../java/lang/Enum.js'
import Keyed from './Keyed.js'
import NamespacedKey from './NamespacedKey.js'
import Object from '../../java/lang/Object.js'
import String from '../../java/lang/String.js'

export default interface Art extends Enum, Keyed {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getBlockHeight(): number;
	getBlockWidth(): number;
	getDeclaringClass(): Class;
	getId(): number;
	getKey(): NamespacedKey;
	name(): string;
	ordinal(): number;
}

export default class Art {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.Art');
	}
	public static $isInstance(obj: any): obj is Art {
		return obj instanceof Art.$javaClass;
	}

	public static get ALBAN(): Art {
		return this.$javaClass.ALBAN;
	}
	public static get AZTEC(): Art {
		return this.$javaClass.AZTEC;
	}
	public static get AZTEC2(): Art {
		return this.$javaClass.AZTEC2;
	}
	public static get BOMB(): Art {
		return this.$javaClass.BOMB;
	}
	public static get BURNING_SKULL(): Art {
		return this.$javaClass.BURNING_SKULL;
	}
	public static get BUST(): Art {
		return this.$javaClass.BUST;
	}
	public static get COURBET(): Art {
		return this.$javaClass.COURBET;
	}
	public static get CREEBET(): Art {
		return this.$javaClass.CREEBET;
	}
	public static get DONKEY_KONG(): Art {
		return this.$javaClass.DONKEY_KONG;
	}
	public static get FIGHTERS(): Art {
		return this.$javaClass.FIGHTERS;
	}
	public static get GRAHAM(): Art {
		return this.$javaClass.GRAHAM;
	}
	public static get KEBAB(): Art {
		return this.$javaClass.KEBAB;
	}
	public static get MATCH(): Art {
		return this.$javaClass.MATCH;
	}
	public static get PIGSCENE(): Art {
		return this.$javaClass.PIGSCENE;
	}
	public static get PLANT(): Art {
		return this.$javaClass.PLANT;
	}
	public static get POINTER(): Art {
		return this.$javaClass.POINTER;
	}
	public static get POOL(): Art {
		return this.$javaClass.POOL;
	}
	public static get SEA(): Art {
		return this.$javaClass.SEA;
	}
	public static get SKELETON(): Art {
		return this.$javaClass.SKELETON;
	}
	public static get SKULL_AND_ROSES(): Art {
		return this.$javaClass.SKULL_AND_ROSES;
	}
	public static get STAGE(): Art {
		return this.$javaClass.STAGE;
	}
	public static get SUNSET(): Art {
		return this.$javaClass.SUNSET;
	}
	public static get VOID(): Art {
		return this.$javaClass.VOID;
	}
	public static get WANDERER(): Art {
		return this.$javaClass.WANDERER;
	}
	public static get WASTELAND(): Art {
		return this.$javaClass.WASTELAND;
	}
	public static get WITHER(): Art {
		return this.$javaClass.WITHER;
	}
}

