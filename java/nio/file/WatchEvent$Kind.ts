declare var Java: any;
import Class from '../../../java/lang/Class.js'
import String from '../../../java/lang/String.js'

export default interface WatchEvent$Kind {
	name(): string;
	type(): Class;
}

export default class WatchEvent$Kind {
	public static get $javaClass(): any {
		return Java.type('java.nio.file.WatchEvent$Kind');
	}
	public static $isInstance(obj: any): obj is WatchEvent$Kind {
		return obj instanceof WatchEvent$Kind.$javaClass;
	}

}

