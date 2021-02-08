declare var Java: any;
import Object from '../../../../java/lang/Object.js'

export default interface Repairable {
	clone(): Repairable;
	clone(): Object;
	getRepairCost(): number;
	hasRepairCost(): boolean;
	setRepairCost(arg0: number): void;
}

export default class Repairable {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.meta.Repairable');
	}
	public static $isInstance(obj: any): obj is Repairable {
		return obj instanceof Repairable.$javaClass;
	}

}

