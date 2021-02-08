declare var Java: any;
import Class from '../../../java/lang/Class.js'
import Object from '../../../java/lang/Object.js'
import PotionType from './PotionType.js'
import String from '../../../java/lang/String.js'

export default interface PotionData extends Object {
	getType(): PotionType;
	isExtended(): boolean;
	isUpgraded(): boolean;
}

export default class PotionData {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.potion.PotionData');
	}
	public static $isInstance(obj: any): obj is PotionData {
		return obj instanceof PotionData.$javaClass;
	}

	constructor(type: PotionType);
	constructor(type: PotionType, extended: boolean, upgraded: boolean);
	constructor(...args: any[]) {
		return new PotionData.$javaClass(...args);
	}

}

