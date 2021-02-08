declare var Java: any;
import Class from '../../../java/lang/Class.js'
import Conversable from './Conversable.js'
import Map from '../../../java/util/Map.js'
import Object from '../../../java/lang/Object.js'
import Plugin from '../../../org/bukkit/plugin/Plugin.js'
import String from '../../../java/lang/String.js'

export default interface ConversationContext extends Object {
	getAllSessionData(): Map;
	getForWhom(): Conversable;
	getPlugin(): Plugin;
	getSessionData(key: Object): Object;
	setSessionData(key: Object, value: Object): void;
}

export default class ConversationContext {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.conversations.ConversationContext');
	}
	public static $isInstance(obj: any): obj is ConversationContext {
		return obj instanceof ConversationContext.$javaClass;
	}

	constructor(plugin: Plugin, forWhom: Conversable, initialSessionData: Map);
	constructor(...args: any[]) {
		return new ConversationContext.$javaClass(...args);
	}

}

