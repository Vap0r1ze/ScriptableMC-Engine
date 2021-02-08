declare var Java: any;
import AutoCloseable from '../../../../../../java/lang/AutoCloseable.js'
import Class from '../../../../../../java/lang/Class.js'
import Object from '../../../../../../java/lang/Object.js'
import String from '../../../../../../java/lang/String.js'

export default interface MCTiming extends Object, AutoCloseable {
	close(): void;
	startTiming(): MCTiming;
	stopTiming(): void;
}

export default class MCTiming {
	public static get $javaClass(): any {
		return Java.type('com.pixlfox.scriptablemc.acf.lib.timings.MCTiming');
	}
	public static $isInstance(obj: any): obj is MCTiming {
		return obj instanceof MCTiming.$javaClass;
	}

	constructor();
	constructor(...args: any[]) {
		return new MCTiming.$javaClass(...args);
	}

}

