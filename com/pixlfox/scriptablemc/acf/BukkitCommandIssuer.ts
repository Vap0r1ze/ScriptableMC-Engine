declare var Java: any;
import CommandIssuer from './CommandIssuer.js'
import CommandManager from './CommandManager.js'
import CommandSender from '../../../../org/bukkit/command/CommandSender.js'
import MessageType from './MessageType.js'
import Player from '../../../../org/bukkit/entity/Player.js'

export default interface BukkitCommandIssuer extends CommandIssuer {
	getIssuer(): any;
	getIssuer(): CommandSender;
	getManager(): CommandManager;
	getPlayer(): Player;
	getUniqueId(): string;
	hasPermission(_name: string): boolean;
	isPlayer(): boolean;
	sendError(key: any, replacements: Array<string>): void;
	sendError(key: any, replacements: Array<string>): void;
	sendInfo(key: any, replacements: Array<string>): void;
	sendInfo(key: any, replacements: Array<string>): void;
	sendMessage(message: string): void;
	sendMessage(type: MessageType, key: any, replacements: Array<string>): void;
	sendMessage(type: MessageType, key: any, replacements: Array<string>): void;
	sendMessageInternal(message: string): void;
	sendSyntax(key: any, replacements: Array<string>): void;
	sendSyntax(key: any, replacements: Array<string>): void;
}

export default class BukkitCommandIssuer {
	public static get $javaClass(): any {
		return Java.type('com.pixlfox.scriptablemc.acf.BukkitCommandIssuer');
	}
	public static $isInstance(obj: any): obj is BukkitCommandIssuer {
		return obj instanceof BukkitCommandIssuer.$javaClass;
	}

}

