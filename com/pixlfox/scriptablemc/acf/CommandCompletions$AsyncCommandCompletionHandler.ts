declare var Java: any;
import Collection from '../../../../java/util/Collection.js'
import CommandCompletionContext from './CommandCompletionContext.js'
import CommandCompletions$CommandCompletionHandler from './CommandCompletions$CommandCompletionHandler.js'
import String from '../../../../java/lang/String.js'

export default interface CommandCompletions$AsyncCommandCompletionHandler extends CommandCompletions$CommandCompletionHandler {
	getCompletions(context: CommandCompletionContext): Array<string>;
}

export default class CommandCompletions$AsyncCommandCompletionHandler {
	public static get $javaClass(): any {
		return Java.type('com.pixlfox.scriptablemc.acf.CommandCompletions$AsyncCommandCompletionHandler');
	}
	public static $isInstance(obj: any): obj is CommandCompletions$AsyncCommandCompletionHandler {
		return obj instanceof CommandCompletions$AsyncCommandCompletionHandler.$javaClass;
	}

}

