declare var Java: any;
import Object from '../../../../java/lang/Object.js'

export default interface Damageable {
	clone(): Damageable;
	clone(): Object;
	getDamage(): number;
	hasDamage(): boolean;
	setDamage(arg0: number): void;
}

export default class Damageable {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.meta.Damageable');
	}
	public static $isInstance(obj: any): obj is Damageable {
		return obj instanceof Damageable.$javaClass;
	}

}

