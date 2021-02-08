declare var Java: any;
import Class from '../../../../../java/lang/Class.js'
import Enum from '../../../../../java/lang/Enum.js'
import Object from '../../../../../java/lang/Object.js'
import String from '../../../../../java/lang/String.js'

export default interface Chest$Type extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
}

export default class Chest$Type {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.Chest$Type');
	}
	public static $isInstance(obj: any): obj is Chest$Type {
		return obj instanceof Chest$Type.$javaClass;
	}

	public static get LEFT(): Chest$Type {
		return this.$javaClass.LEFT;
	}
	public static get RIGHT(): Chest$Type {
		return this.$javaClass.RIGHT;
	}
	public static get SINGLE(): Chest$Type {
		return this.$javaClass.SINGLE;
	}
}

