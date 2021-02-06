declare var Java: any;
import Plugin from '../../../org/bukkit/plugin/Plugin.js'

export default interface BukkitWorker {
	getOwner(): Plugin;
	getTaskId(): number;
	getThread(): any;
}

export default class BukkitWorker {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.scheduler.BukkitWorker');
	}
	public static $isInstance(obj: any): obj is BukkitWorker {
		return obj instanceof BukkitWorker.$javaClass;
	}

}

