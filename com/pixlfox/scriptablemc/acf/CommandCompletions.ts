declare var Java: any;
import CommandCompletions$AsyncCommandCompletionHandler from './CommandCompletions$AsyncCommandCompletionHandler.js'
import CommandCompletions$CommandCompletionHandler from './CommandCompletions$CommandCompletionHandler.js'
import CommandManager from './CommandManager.js'

export default interface CommandCompletions {
	registerAsyncCompletion(id: string, handler: CommandCompletions$AsyncCommandCompletionHandler): CommandCompletions$CommandCompletionHandler;
	registerCompletion(id: string, handler: CommandCompletions$CommandCompletionHandler): CommandCompletions$CommandCompletionHandler;
	registerStaticCompletion(id: string, list: string): CommandCompletions$CommandCompletionHandler;
	registerStaticCompletion(id: string, completions: Array<any>): CommandCompletions$CommandCompletionHandler;
	registerStaticCompletion(id: string, supplier: any): CommandCompletions$CommandCompletionHandler;
	registerStaticCompletion(id: string, completions: Array<string>): CommandCompletions$CommandCompletionHandler;
	setDefaultCompletion(id: string, classes: Array<any>): void;
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

