declare var Java: any;
import List from '../../java/util/List.js'
import Location from './Location.js'
import Raid$RaidStatus from './Raid$RaidStatus.js'
import Raider from './entity/Raider.js'
import Set from '../../java/util/Set.js'

export default interface Raid {
	getActiveTicks(): number;
	getBadOmenLevel(): number;
	getHeroes(): Set;
	getLocation(): Location;
	getRaiders(): Array<Raider>;
	getSpawnedGroups(): number;
	getStatus(): Raid$RaidStatus;
	getTotalGroups(): number;
	getTotalHealth(): number;
	getTotalWaves(): number;
	isStarted(): boolean;
	setBadOmenLevel(arg0: number): void;
}

export default class Raid {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.Raid');
	}
	public static $isInstance(obj: any): obj is Raid {
		return obj instanceof Raid.$javaClass;
	}

}

