declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import CommandIssuer from './CommandIssuer.js'
import CommandSender from '../../../../org/bukkit/command/CommandSender.js'
import ConditionContext from './ConditionContext.js'
import Integer from '../../../../java/lang/Integer.js'
import Object from '../../../../java/lang/Object.js'
import Player from '../../../../org/bukkit/entity/Player.js'
import String from '../../../../java/lang/String.js'

export default interface BukkitConditionContext extends ConditionContext {
	getConfig(): string;
	getConfigValue(flag: string, def: string): string;
	getConfigValue(flag: string, def: Integer): Integer;
	getIssuer(): CommandIssuer;
	getPlayer(): Player;
	getSender(): CommandSender;
	hasConfig(flag: string): boolean;
}

export default class BukkitConditionContext {
	public static get $javaClass(): any {
		return Java.type('com.pixlfox.scriptablemc.acf.BukkitConditionContext');
	}
	public static $isInstance(obj: any): obj is BukkitConditionContext {
		return obj instanceof BukkitConditionContext.$javaClass;
	}

}

