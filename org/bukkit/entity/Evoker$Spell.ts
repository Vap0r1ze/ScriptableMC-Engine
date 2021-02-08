declare var Java: any;
import Class from '../../../java/lang/Class.js'
import Enum from '../../../java/lang/Enum.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'

export default interface Evoker$Spell extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
}

export default class Evoker$Spell {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.entity.Evoker$Spell');
	}
	public static $isInstance(obj: any): obj is Evoker$Spell {
		return obj instanceof Evoker$Spell.$javaClass;
	}

	public static get BLINDNESS(): Evoker$Spell {
		return this.$javaClass.BLINDNESS;
	}
	public static get DISAPPEAR(): Evoker$Spell {
		return this.$javaClass.DISAPPEAR;
	}
	public static get FANGS(): Evoker$Spell {
		return this.$javaClass.FANGS;
	}
	public static get NONE(): Evoker$Spell {
		return this.$javaClass.NONE;
	}
	public static get SUMMON(): Evoker$Spell {
		return this.$javaClass.SUMMON;
	}
	public static get WOLOLO(): Evoker$Spell {
		return this.$javaClass.WOLOLO;
	}
}

