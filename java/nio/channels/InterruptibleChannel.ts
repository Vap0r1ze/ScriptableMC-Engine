declare var Java: any;
import Channel from './Channel.js'

export default interface InterruptibleChannel extends Channel {
	close(): void;
	isOpen(): boolean;
}

export default class InterruptibleChannel {
	public static get $javaClass(): any {
		return Java.type('java.nio.channels.InterruptibleChannel');
	}
	public static $isInstance(obj: any): obj is InterruptibleChannel {
		return obj instanceof InterruptibleChannel.$javaClass;
	}

}

