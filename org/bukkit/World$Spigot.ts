declare var Java: any;
import Class from '../../java/lang/Class.js'
import LightningStrike from './entity/LightningStrike.js'
import Location from './Location.js'
import Object from '../../java/lang/Object.js'
import String from '../../java/lang/String.js'

export default interface World$Spigot extends Object {
	strikeLightning(loc: Location, isSilent: boolean): LightningStrike;
	strikeLightningEffect(loc: Location, isSilent: boolean): LightningStrike;
}

export default class World$Spigot {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.World$Spigot');
	}
	public static $isInstance(obj: any): obj is World$Spigot {
		return obj instanceof World$Spigot.$javaClass;
	}

	constructor();
	constructor(...args: any[]) {
		return new World$Spigot.$javaClass(...args);
	}

}

