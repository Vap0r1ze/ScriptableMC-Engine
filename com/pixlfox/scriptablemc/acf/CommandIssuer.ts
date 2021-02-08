declare var Java: any;
import CommandManager from './CommandManager.js'
import MessageType from './MessageType.js'

export default interface CommandIssuer {
	getIssuer(): any;
	getManager(): CommandManager;
	getUniqueId(): string;
	hasPermission(permission: string): boolean;
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

export default class CommandIssuer {
	public static get $javaClass(): any {
		return Java.type('com.pixlfox.scriptablemc.acf.CommandIssuer');
	}
	public static $isInstance(obj: any): obj is CommandIssuer {
		return obj instanceof CommandIssuer.$javaClass;
	}

}

