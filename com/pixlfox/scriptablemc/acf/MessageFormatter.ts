declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'

export default interface MessageFormatter extends Object {
	format(message: string): string;
	format(index: number, message: string): string;
	getColor(index: number): Object;
	getDefaultColor(): Object;
	setColor(index: number, color: Object): Object;
}

export default class MessageFormatter {
	public static get $javaClass(): any {
		return Java.type('com.pixlfox.scriptablemc.acf.MessageFormatter');
	}
	public static $isInstance(obj: any): obj is MessageFormatter {
		return obj instanceof MessageFormatter.$javaClass;
	}

	constructor(colors: Array<Object>);
	constructor(...args: any[]) {
		return new MessageFormatter.$javaClass(...args);
	}

}

