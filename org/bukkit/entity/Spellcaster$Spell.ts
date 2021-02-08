declare var Java: any;
import Class from '../../../java/lang/Class.js'
import Enum from '../../../java/lang/Enum.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'

export default interface Spellcaster$Spell extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
}

export default class Spellcaster$Spell {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.entity.Spellcaster$Spell');
	}
	public static $isInstance(obj: any): obj is Spellcaster$Spell {
		return obj instanceof Spellcaster$Spell.$javaClass;
	}

	public static get BLINDNESS(): Spellcaster$Spell {
		return this.$javaClass.BLINDNESS;
	}
	public static get DISAPPEAR(): Spellcaster$Spell {
		return this.$javaClass.DISAPPEAR;
	}
	public static get FANGS(): Spellcaster$Spell {
		return this.$javaClass.FANGS;
	}
	public static get NONE(): Spellcaster$Spell {
		return this.$javaClass.NONE;
	}
	public static get SUMMON_VEX(): Spellcaster$Spell {
		return this.$javaClass.SUMMON_VEX;
	}
	public static get WOLOLO(): Spellcaster$Spell {
		return this.$javaClass.WOLOLO;
	}
}

