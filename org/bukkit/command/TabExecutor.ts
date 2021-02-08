declare var Java: any;
import Command from './Command.js'
import CommandExecutor from './CommandExecutor.js'
import CommandSender from './CommandSender.js'
import List from '../../../java/util/List.js'
import String from '../../../java/lang/String.js'
import TabCompleter from './TabCompleter.js'

export default interface TabExecutor extends TabCompleter, CommandExecutor {
	onCommand(arg0: CommandSender, arg1: Command, arg2: string, arg3: Array<string>): boolean;
	onTabComplete(arg0: CommandSender, arg1: Command, arg2: string, arg3: Array<string>): Array<string>;
}

export default class TabExecutor {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.command.TabExecutor');
	}
	public static $isInstance(obj: any): obj is TabExecutor {
		return obj instanceof TabExecutor.$javaClass;
	}

}

