declare var Java: any;
import Closeable from '../../../java/io/Closeable.js'

export default interface Channel extends Closeable {
	close(): void;
	isOpen(): boolean;
}

export default class Channel {
	public static get $javaClass(): any {
		return Java.type('java.nio.channels.Channel');
	}
	public static $isInstance(obj: any): obj is Channel {
		return obj instanceof Channel.$javaClass;
	}

}

