declare var Java: any;

export default interface MCTiming {
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

