declare var Java: any;
import BaseComponent from '../../net/md_5/bungee/api/chat/BaseComponent.js'
import Class from '../../java/lang/Class.js'
import Object from '../../java/lang/Object.js'
import String from '../../java/lang/String.js'
import YamlConfiguration from './configuration/file/YamlConfiguration.js'

export default interface Server$Spigot extends Object {
	broadcast(component: BaseComponent): void;
	broadcast(components: Array<BaseComponent>): void;
	getConfig(): YamlConfiguration;
	restart(): void;
}

export default class Server$Spigot {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.Server$Spigot');
	}
	public static $isInstance(obj: any): obj is Server$Spigot {
		return obj instanceof Server$Spigot.$javaClass;
	}

	constructor();
	constructor(...args: any[]) {
		return new Server$Spigot.$javaClass(...args);
	}

}

