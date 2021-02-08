declare var Java: any;
import MCTiming from './MCTiming.js'
import Plugin from '../../../../../../org/bukkit/plugin/Plugin.js'

export default interface TimingManager {
	of(_name: string): MCTiming;
	of(_name: string, parent: MCTiming): MCTiming;
	ofStart(_name: string): MCTiming;
	ofStart(_name: string, parent: MCTiming): MCTiming;
}

export default class TimingManager {
	public static get $javaClass(): any {
		return Java.type('com.pixlfox.scriptablemc.acf.lib.timings.TimingManager');
	}
	public static $isInstance(obj: any): obj is TimingManager {
		return obj instanceof TimingManager.$javaClass;
	}

	public static of(plugin: Plugin): TimingManager;
	public static of(...args: any[]): any {
		return TimingManager.$javaClass.of(...args);
	}

}

