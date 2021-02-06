declare var Java: any;
import ClickEvent$Action from './ClickEvent$Action.js'

export default interface ClickEvent {
	getAction(): ClickEvent$Action;
	getValue(): string;
}

export default class ClickEvent {
	public static get $javaClass(): any {
		return Java.type('net.md_5.bungee.api.chat.ClickEvent');
	}
	public static $isInstance(obj: any): obj is ClickEvent {
		return obj instanceof ClickEvent.$javaClass;
	}

	constructor(action: ClickEvent$Action, value: string);
	constructor(...args: any[]) {
		return new ClickEvent.$javaClass(...args);
	}

}

