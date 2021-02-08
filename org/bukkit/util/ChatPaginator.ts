declare var Java: any;
import ChatPaginator$ChatPage from './ChatPaginator$ChatPage.js'
import Class from '../../../java/lang/Class.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'

export default class ChatPaginator {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.util.ChatPaginator');
	}
	public static $isInstance(obj: any): obj is ChatPaginator {
		return obj instanceof ChatPaginator.$javaClass;
	}

	constructor();
	constructor(...args: any[]) {
		return new ChatPaginator.$javaClass(...args);
	}

	public static get AVERAGE_CHAT_PAGE_WIDTH(): number {
		return ChatPaginator.$javaClass.AVERAGE_CHAT_PAGE_WIDTH;
	}

	public static get CLOSED_CHAT_PAGE_HEIGHT(): number {
		return ChatPaginator.$javaClass.CLOSED_CHAT_PAGE_HEIGHT;
	}

	public static get GUARANTEED_NO_WRAP_CHAT_PAGE_WIDTH(): number {
		return ChatPaginator.$javaClass.GUARANTEED_NO_WRAP_CHAT_PAGE_WIDTH;
	}

	public static get OPEN_CHAT_PAGE_HEIGHT(): number {
		return ChatPaginator.$javaClass.OPEN_CHAT_PAGE_HEIGHT;
	}

	public static get UNBOUNDED_PAGE_HEIGHT(): number {
		return ChatPaginator.$javaClass.UNBOUNDED_PAGE_HEIGHT;
	}

	public static get UNBOUNDED_PAGE_WIDTH(): number {
		return ChatPaginator.$javaClass.UNBOUNDED_PAGE_WIDTH;
	}

	public static paginate(unpaginatedString: string, pageNumber: number): ChatPaginator$ChatPage;
	public static paginate(unpaginatedString: string, pageNumber: number, lineLength: number, pageHeight: number): ChatPaginator$ChatPage;
	public static paginate(...args: any[]): any {
		return ChatPaginator.$javaClass.paginate(...args);
	}

	public static wordWrap(rawString: string, lineLength: number): Array<string>;
	public static wordWrap(...args: any[]): any {
		return ChatPaginator.$javaClass.wordWrap(...args);
	}

}

