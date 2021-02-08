declare var Java: any;
import BaseComponent from '../../../net/md_5/bungee/api/chat/BaseComponent.js'
import Class from '../../../java/lang/Class.js'
import CommandSender$Spigot from '../../../org/bukkit/command/CommandSender$Spigot.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'
import UUID from '../../../java/util/UUID.js'

export default interface Entity$Spigot extends CommandSender$Spigot {
	sendMessage(component: BaseComponent): void;
	sendMessage(components: Array<BaseComponent>): void;
	sendMessage(sender: string, component: BaseComponent): void;
	sendMessage(sender: string, components: Array<BaseComponent>): void;
}

export default class Entity$Spigot {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.entity.Entity$Spigot');
	}
	public static $isInstance(obj: any): obj is Entity$Spigot {
		return obj instanceof Entity$Spigot.$javaClass;
	}

	constructor();
	constructor(...args: any[]) {
		return new Entity$Spigot.$javaClass(...args);
	}

}

