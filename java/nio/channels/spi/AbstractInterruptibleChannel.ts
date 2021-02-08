declare var Java: any;
import Channel from '../../../../java/nio/channels/Channel.js'
import Class from '../../../../java/lang/Class.js'
import InterruptibleChannel from '../../../../java/nio/channels/InterruptibleChannel.js'
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'

export default interface AbstractInterruptibleChannel extends Object, Channel, InterruptibleChannel {
	close(): void;
	isOpen(): boolean;
}

export default class AbstractInterruptibleChannel {
	public static get $javaClass(): any {
		return Java.type('java.nio.channels.spi.AbstractInterruptibleChannel');
	}
	public static $isInstance(obj: any): obj is AbstractInterruptibleChannel {
		return obj instanceof AbstractInterruptibleChannel.$javaClass;
	}

}

