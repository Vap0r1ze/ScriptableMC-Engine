declare var Java: any;
import String from '../../../java/lang/String.js'

export default interface WatchEvent$Modifier {
	name(): string;
}

export default class WatchEvent$Modifier {
	public static get $javaClass(): any {
		return Java.type('java.nio.file.WatchEvent$Modifier');
	}
	public static $isInstance(obj: any): obj is WatchEvent$Modifier {
		return obj instanceof WatchEvent$Modifier.$javaClass;
	}

}

