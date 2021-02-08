declare var Java: any;
import Block from '../../../org/bukkit/block/Block.js'
import CommandSender from './CommandSender.js'
import CommandSender$Spigot from './CommandSender$Spigot.js'
import Permission from '../../../org/bukkit/permissions/Permission.js'
import PermissionAttachment from '../../../org/bukkit/permissions/PermissionAttachment.js'
import Plugin from '../../../org/bukkit/plugin/Plugin.js'
import Server from '../../../org/bukkit/Server.js'
import Set from '../../../java/util/Set.js'
import String from '../../../java/lang/String.js'
import UUID from '../../../java/util/UUID.js'

export default interface BlockCommandSender extends CommandSender {
	addAttachment(arg0: Plugin): PermissionAttachment;
	addAttachment(arg0: Plugin, arg1: number): PermissionAttachment;
	addAttachment(arg0: Plugin, arg1: string, arg2: boolean): PermissionAttachment;
	addAttachment(arg0: Plugin, arg1: string, arg2: boolean, arg3: number): PermissionAttachment;
	getBlock(): Block;
	getEffectivePermissions(): Set;
	getName(): string;
	getServer(): Server;
	hasPermission(arg0: Permission): boolean;
	hasPermission(arg0: string): boolean;
	isOp(): boolean;
	isPermissionSet(arg0: string): boolean;
	isPermissionSet(arg0: Permission): boolean;
	recalculatePermissions(): void;
	removeAttachment(arg0: PermissionAttachment): void;
	sendMessage(arg0: string): void;
	sendMessage(arg0: Array<string>): void;
	sendMessage(arg0: string, arg1: Array<string>): void;
	sendMessage(arg0: string, arg1: string): void;
	setOp(arg0: boolean): void;
	spigot(): CommandSender$Spigot;
}

export default class BlockCommandSender {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.command.BlockCommandSender');
	}
	public static $isInstance(obj: any): obj is BlockCommandSender {
		return obj instanceof BlockCommandSender.$javaClass;
	}

}

