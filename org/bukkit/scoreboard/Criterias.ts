declare var Java: any;
import Class from '../../../java/lang/Class.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'

export default class Criterias {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.scoreboard.Criterias');
	}
	public static $isInstance(obj: any): obj is Criterias {
		return obj instanceof Criterias.$javaClass;
	}

	public static get DEATHS(): string {
		return Criterias.$javaClass.DEATHS;
	}

	public static get HEALTH(): string {
		return Criterias.$javaClass.HEALTH;
	}

	public static get PLAYER_KILLS(): string {
		return Criterias.$javaClass.PLAYER_KILLS;
	}

	public static get TOTAL_KILLS(): string {
		return Criterias.$javaClass.TOTAL_KILLS;
	}

}

