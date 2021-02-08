declare var Java: any;
import BaseComponent from './BaseComponent.js'
import Class from '../../../../../java/lang/Class.js'
import Content from './hover/content/Content.js'
import HoverEvent$Action from './HoverEvent$Action.js'
import List from '../../../../../java/util/List.js'
import Object from '../../../../../java/lang/Object.js'
import String from '../../../../../java/lang/String.js'

export default interface HoverEvent extends Object {
	addContent(content: Content): void;
	getAction(): HoverEvent$Action;
	getContents(): Array<Content>;
	getValue(): Array<BaseComponent>;
	isLegacy(): boolean;
	setLegacy(legacy: boolean): void;
}

export default class HoverEvent {
	public static get $javaClass(): any {
		return Java.type('net.md_5.bungee.api.chat.HoverEvent');
	}
	public static $isInstance(obj: any): obj is HoverEvent {
		return obj instanceof HoverEvent.$javaClass;
	}

	constructor(action: HoverEvent$Action, value: Array<BaseComponent>);
	constructor(action: HoverEvent$Action, contents: Array<any>);
	constructor(action: HoverEvent$Action, contents: Array<Content>);
	constructor(...args: any[]) {
		return new HoverEvent.$javaClass(...args);
	}

}

