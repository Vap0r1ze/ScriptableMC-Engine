declare var Java: any;
import HoverEvent$Action from '../../../../../../../net/md_5/bungee/api/chat/HoverEvent$Action.js'

export default interface Content {
	assertAction(input: HoverEvent$Action): void;
	requiredAction(): HoverEvent$Action;
}

export default class Content {
	public static get $javaClass(): any {
		return Java.type('net.md_5.bungee.api.chat.hover.content.Content');
	}
	public static $isInstance(obj: any): obj is Content {
		return obj instanceof Content.$javaClass;
	}

	constructor();
	constructor(...args: any[]) {
		return new Content.$javaClass(...args);
	}

}

