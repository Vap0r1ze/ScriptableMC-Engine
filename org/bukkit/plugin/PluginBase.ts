declare var Java: any;
import ChunkGenerator from '../../../org/bukkit/generator/ChunkGenerator.js'
import Class from '../../../java/lang/Class.js'
import Command from '../../../org/bukkit/command/Command.js'
import CommandSender from '../../../org/bukkit/command/CommandSender.js'
import File from '../../../java/io/File.js'
import FileConfiguration from '../../../org/bukkit/configuration/file/FileConfiguration.js'
import InputStream from '../../../java/io/InputStream.js'
import List from '../../../java/util/List.js'
import Logger from '../../../java/util/logging/Logger.js'
import Object from '../../../java/lang/Object.js'
import Plugin from './Plugin.js'
import PluginDescriptionFile from './PluginDescriptionFile.js'
import PluginLoader from './PluginLoader.js'
import Server from '../../../org/bukkit/Server.js'
import String from '../../../java/lang/String.js'

export default interface PluginBase extends Object, Plugin {
	getConfig(): FileConfiguration;
	getDataFolder(): File;
	getDefaultWorldGenerator(arg0: string, arg1: string): ChunkGenerator;
	getDescription(): PluginDescriptionFile;
	getLogger(): Logger;
	getName(): string;
	getPluginLoader(): PluginLoader;
	getResource(arg0: string): InputStream;
	getServer(): Server;
	isEnabled(): boolean;
	isNaggable(): boolean;
	onCommand(arg0: CommandSender, arg1: Command, arg2: string, arg3: Array<string>): boolean;
	onDisable(): void;
	onEnable(): void;
	onLoad(): void;
	onTabComplete(arg0: CommandSender, arg1: Command, arg2: string, arg3: Array<string>): Array<string>;
	reloadConfig(): void;
	saveConfig(): void;
	saveDefaultConfig(): void;
	saveResource(arg0: string, arg1: boolean): void;
	setNaggable(arg0: boolean): void;
}

export default class PluginBase {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.plugin.PluginBase');
	}
	public static $isInstance(obj: any): obj is PluginBase {
		return obj instanceof PluginBase.$javaClass;
	}

	constructor();
	constructor(...args: any[]) {
		return new PluginBase.$javaClass(...args);
	}

}

