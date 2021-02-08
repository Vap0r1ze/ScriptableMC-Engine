declare var Java: any;
import Class from '../../../../../java/lang/Class.js'
import Enum from '../../../../../java/lang/Enum.js'
import Object from '../../../../../java/lang/Object.js'
import String from '../../../../../java/lang/String.js'

export default interface ComponentBuilder$FormatRetention extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
}

export default class ComponentBuilder$FormatRetention {
	public static get $javaClass(): any {
		return Java.type('net.md_5.bungee.api.chat.ComponentBuilder$FormatRetention');
	}
	public static $isInstance(obj: any): obj is ComponentBuilder$FormatRetention {
		return obj instanceof ComponentBuilder$FormatRetention.$javaClass;
	}

	public static get ALL(): ComponentBuilder$FormatRetention {
		return this.$javaClass.ALL;
	}
	public static get EVENTS(): ComponentBuilder$FormatRetention {
		return this.$javaClass.EVENTS;
	}
	public static get FORMATTING(): ComponentBuilder$FormatRetention {
		return this.$javaClass.FORMATTING;
	}
	public static get NONE(): ComponentBuilder$FormatRetention {
		return this.$javaClass.NONE;
	}
}

