declare var Java: any;

export default class MessageType {
	public static get $javaClass(): any {
		return Java.type('com.pixlfox.scriptablemc.acf.MessageType');
	}
	public static $isInstance(obj: any): obj is MessageType {
		return obj instanceof MessageType.$javaClass;
	}

	constructor();
	constructor(...args: any[]) {
		return new MessageType.$javaClass(...args);
	}

	public static get ERROR(): MessageType {
		return MessageType.$javaClass.ERROR;
	}

	public static get HELP(): MessageType {
		return MessageType.$javaClass.HELP;
	}

	public static get INFO(): MessageType {
		return MessageType.$javaClass.INFO;
	}

	public static get SYNTAX(): MessageType {
		return MessageType.$javaClass.SYNTAX;
	}

}

