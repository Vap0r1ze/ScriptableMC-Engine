declare var Java: any;
import CommandIssuer from './CommandIssuer.js'
import CommandSender from '../../../../org/bukkit/command/CommandSender.js'
import ConditionContext from './ConditionContext.js'
import Player from '../../../../org/bukkit/entity/Player.js'

export default interface BukkitConditionContext extends ConditionContext {
	getConfig(): string;
	getConfigValue(flag: string, def: string): string;
	getConfigValue(flag: string, def: any): any;
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

