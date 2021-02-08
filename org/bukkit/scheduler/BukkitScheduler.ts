declare var Java: any;
import BukkitRunnable from './BukkitRunnable.js'
import BukkitTask from './BukkitTask.js'
import BukkitWorker from './BukkitWorker.js'
import Callable from '../../../java/util/concurrent/Callable.js'
import Consumer from '../../../java/util/function/Consumer.js'
import Future from '../../../java/util/concurrent/Future.js'
import List from '../../../java/util/List.js'
import Plugin from '../../../org/bukkit/plugin/Plugin.js'
import Runnable from '../../../java/lang/Runnable.js'

export default interface BukkitScheduler {
	callSyncMethod(arg0: Plugin, arg1: Callable): Future;
	cancelTask(arg0: number): void;
	cancelTasks(arg0: Plugin): void;
	getActiveWorkers(): Array<BukkitWorker>;
	getPendingTasks(): Array<BukkitTask>;
	isCurrentlyRunning(arg0: number): boolean;
	isQueued(arg0: number): boolean;
	runTask(arg0: Plugin, arg1: Runnable): BukkitTask;
	runTask(arg0: Plugin, arg1: BukkitRunnable): BukkitTask;
	runTask(arg0: Plugin, arg1: Consumer): void;
	runTaskAsynchronously(arg0: Plugin, arg1: Runnable): BukkitTask;
	runTaskAsynchronously(arg0: Plugin, arg1: Consumer): void;
	runTaskAsynchronously(arg0: Plugin, arg1: BukkitRunnable): BukkitTask;
	runTaskLater(arg0: Plugin, arg1: BukkitRunnable, arg2: number): BukkitTask;
	runTaskLater(arg0: Plugin, arg1: Runnable, arg2: number): BukkitTask;
	runTaskLater(arg0: Plugin, arg1: Consumer, arg2: number): void;
	runTaskLaterAsynchronously(arg0: Plugin, arg1: Runnable, arg2: number): BukkitTask;
	runTaskLaterAsynchronously(arg0: Plugin, arg1: Consumer, arg2: number): void;
	runTaskLaterAsynchronously(arg0: Plugin, arg1: BukkitRunnable, arg2: number): BukkitTask;
	runTaskTimer(arg0: Plugin, arg1: Runnable, arg2: number, arg3: number): BukkitTask;
	runTaskTimer(arg0: Plugin, arg1: BukkitRunnable, arg2: number, arg3: number): BukkitTask;
	runTaskTimer(arg0: Plugin, arg1: Consumer, arg2: number, arg3: number): void;
	runTaskTimerAsynchronously(arg0: Plugin, arg1: Consumer, arg2: number, arg3: number): void;
	runTaskTimerAsynchronously(arg0: Plugin, arg1: Runnable, arg2: number, arg3: number): BukkitTask;
	runTaskTimerAsynchronously(arg0: Plugin, arg1: BukkitRunnable, arg2: number, arg3: number): BukkitTask;
	scheduleAsyncDelayedTask(arg0: Plugin, arg1: Runnable): number;
	scheduleAsyncDelayedTask(arg0: Plugin, arg1: Runnable, arg2: number): number;
	scheduleAsyncRepeatingTask(arg0: Plugin, arg1: Runnable, arg2: number, arg3: number): number;
	scheduleSyncDelayedTask(arg0: Plugin, arg1: Runnable): number;
	scheduleSyncDelayedTask(arg0: Plugin, arg1: BukkitRunnable): number;
	scheduleSyncDelayedTask(arg0: Plugin, arg1: BukkitRunnable, arg2: number): number;
	scheduleSyncDelayedTask(arg0: Plugin, arg1: Runnable, arg2: number): number;
	scheduleSyncRepeatingTask(arg0: Plugin, arg1: Runnable, arg2: number, arg3: number): number;
	scheduleSyncRepeatingTask(arg0: Plugin, arg1: BukkitRunnable, arg2: number, arg3: number): number;
}

export default class BukkitScheduler {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.scheduler.BukkitScheduler');
	}
	public static $isInstance(obj: any): obj is BukkitScheduler {
		return obj instanceof BukkitScheduler.$javaClass;
	}

}

