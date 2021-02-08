declare var Java: any;
import Class from '../../../java/lang/Class.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'

export default interface ChatPaginator$ChatPage extends Object {
	getLines(): Array<string>;
	getPageNumber(): number;
	getTotalPages(): number;
}

export default class ChatPaginator$ChatPage {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.util.ChatPaginator$ChatPage');
	}
	public static $isInstance(obj: any): obj is ChatPaginator$ChatPage {
		return obj instanceof ChatPaginator$ChatPage.$javaClass;
	}

	constructor(lines: Array<string>, pageNumber: number, totalPages: number);
	constructor(...args: any[]) {
		return new ChatPaginator$ChatPage.$javaClass(...args);
	}

}

