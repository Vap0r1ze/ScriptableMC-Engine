declare var Java: any;

export default interface MessageFormatter {
	format(message: string): string;
	format(index: number, message: string): string;
	getColor(index: number): any;
	getDefaultColor(): any;
	setColor(index: number, color: any): any;
}

export default class MessageFormatter {
	public static get $javaClass(): any {
		return Java.type('com.pixlfox.scriptablemc.acf.MessageFormatter');
	}
	public static $isInstance(obj: any): obj is MessageFormatter {
		return obj instanceof MessageFormatter.$javaClass;
	}

	constructor(colors: Array<any>);
	constructor(...args: any[]) {
		return new MessageFormatter.$javaClass(...args);
	}

}

