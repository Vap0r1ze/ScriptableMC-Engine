declare var Java: any;
import CommandCompletionContext from './CommandCompletionContext.js'

export default interface CommandCompletions$CommandCompletionHandler {
	getCompletions(context: CommandCompletionContext): Array<string>;
}

export default class CommandCompletions$CommandCompletionHandler {
	public static get $javaClass(): any {
		return Java.type('com.pixlfox.scriptablemc.acf.CommandCompletions$CommandCompletionHandler');
	}
	public static $isInstance(obj: any): obj is CommandCompletions$CommandCompletionHandler {
		return obj instanceof CommandCompletions$CommandCompletionHandler.$javaClass;
	}

}

