declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import CommandCompletionContext from './CommandCompletionContext.js'
import CommandIssuer from './CommandIssuer.js'
import CommandSender from '../../../../org/bukkit/command/CommandSender.js'
import Integer from '../../../../java/lang/Integer.js'
import Map from '../../../../java/util/Map.js'
import Object from '../../../../java/lang/Object.js'
import Player from '../../../../org/bukkit/entity/Player.js'
import String from '../../../../java/lang/String.js'

export default interface BukkitCommandCompletionContext extends CommandCompletionContext {
	getConfig(): string;
	getConfig(key: string): string;
	getConfig(key: string, def: string): string;
	getConfigs(): Map;
	getContextValue(clazz: Class): Object;
	getContextValue(clazz: Class, paramIdx: Integer): Object;
	getContextValueByName(clazz: Class, _name: string): Object;
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

