declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import Collection from '../../../../java/util/Collection.js'
import CommandCompletions$AsyncCommandCompletionHandler from './CommandCompletions$AsyncCommandCompletionHandler.js'
import CommandCompletions$CommandCompletionHandler from './CommandCompletions$CommandCompletionHandler.js'
import CommandManager from './CommandManager.js'
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'
import Supplier from '../../../../java/util/function/Supplier.js'

export default interface CommandCompletions extends Object {
	registerAsyncCompletion(id: string, handler: CommandCompletions$AsyncCommandCompletionHandler): CommandCompletions$CommandCompletionHandler;
	registerCompletion(id: string, handler: CommandCompletions$CommandCompletionHandler): CommandCompletions$CommandCompletionHandler;
	registerStaticCompletion(id: string, completions: Array<any>): CommandCompletions$CommandCompletionHandler;
	registerStaticCompletion(id: string, completions: Array<string>): CommandCompletions$CommandCompletionHandler;
	registerStaticCompletion(id: string, list: string): CommandCompletions$CommandCompletionHandler;
	registerStaticCompletion(id: string, supplier: Supplier): CommandCompletions$CommandCompletionHandler;
	setDefaultCompletion(id: string, classes: Array<Class>): void;
}

export default class CommandCompletions {
	public static get $javaClass(): any {
		return Java.type('com.pixlfox.scriptablemc.acf.CommandCompletions');
	}
	public static $isInstance(obj: any): obj is CommandCompletions {
		return obj instanceof CommandCompletions.$javaClass;
	}

	constructor(manager: CommandManager);
	constructor(...args: any[]) {
		return new CommandCompletions.$javaClass(...args);
	}

}

