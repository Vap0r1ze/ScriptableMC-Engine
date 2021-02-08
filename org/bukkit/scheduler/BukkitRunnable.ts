declare var Java: any;
import BukkitTask from './BukkitTask.js'
import Class from '../../../java/lang/Class.js'
import Object from '../../../java/lang/Object.js'
import Plugin from '../../../org/bukkit/plugin/Plugin.js'
import Runnable from '../../../java/lang/Runnable.js'
import String from '../../../java/lang/String.js'

export default interface BukkitRunnable extends Object, Runnable {
	cancel(): void;
	getTaskId(): number;
	isCancelled(): boolean;
	run(): void;
	runTask(plugin: Plugin): BukkitTask;
	runTaskAsynchronously(plugin: Plugin): BukkitTask;
	runTaskLater(plugin: Plugin, delay: number): BukkitTask;
	runTaskLaterAsynchronously(plugin: Plugin, delay: number): BukkitTask;
	runTaskTimer(plugin: Plugin, delay: number, period: number): BukkitTask;
	runTaskTimerAsynchronously(plugin: Plugin, delay: number, period: number): BukkitTask;
}

export default class BukkitRunnable {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.scheduler.BukkitRunnable');
	}
	public static $isInstance(obj: any): obj is BukkitRunnable {
		return obj instanceof BukkitRunnable.$javaClass;
	}

	constructor();
	constructor(...args: any[]) {
		return new BukkitRunnable.$javaClass(...args);
	}

}

