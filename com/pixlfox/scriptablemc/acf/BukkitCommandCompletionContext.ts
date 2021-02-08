declare var Java: any;
import CommandCompletionContext from './CommandCompletionContext.js'
import CommandIssuer from './CommandIssuer.js'
import CommandSender from '../../../../org/bukkit/command/CommandSender.js'
import Player from '../../../../org/bukkit/entity/Player.js'

export default interface BukkitCommandCompletionContext extends CommandCompletionContext {
	getConfig(): string;
	getConfig(key: string): string;
	getConfig(key: string, def: string): string;
	getConfigs(): any;
	getContextValue(clazz: any): any;
	getContextValue(clazz: any, paramIdx: any): any;
	getContextValueByName(clazz: any, _name: string): any;
	getInput(): string;
	getIssuer(): CommandIssuer;
	getPlayer(): Player;
	getSender(): CommandSender;
	hasConfig(key: string): boolean;
	isAsync(): boolean;
}

export default class BukkitCommandCompletionContext {
	public static get $javaClass(): any {
		return Java.type('com.pixlfox.scriptablemc.acf.BukkitCommandCompletionContext');
	}
	public static $isInstance(obj: any): obj is BukkitCommandCompletionContext {
		return obj instanceof BukkitCommandCompletionContext.$javaClass;
	}

}

