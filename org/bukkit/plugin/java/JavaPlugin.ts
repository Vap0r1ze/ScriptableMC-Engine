declare var Java: any;
import ChunkGenerator from '../../../../org/bukkit/generator/ChunkGenerator.js'
import Class from '../../../../java/lang/Class.js'
import Command from '../../../../org/bukkit/command/Command.js'
import CommandSender from '../../../../org/bukkit/command/CommandSender.js'
import File from '../../../../java/io/File.js'
import FileConfiguration from '../../../../org/bukkit/configuration/file/FileConfiguration.js'
import InputStream from '../../../../java/io/InputStream.js'
import List from '../../../../java/util/List.js'
import Logger from '../../../../java/util/logging/Logger.js'
import Object from '../../../../java/lang/Object.js'
import PluginBase from '../../../../org/bukkit/plugin/PluginBase.js'
import PluginCommand from '../../../../org/bukkit/command/PluginCommand.js'
import PluginDescriptionFile from '../../../../org/bukkit/plugin/PluginDescriptionFile.js'
import PluginLoader from '../../../../org/bukkit/plugin/PluginLoader.js'
import Server from '../../../../org/bukkit/Server.js'
import String from '../../../../java/lang/String.js'

export default interface JavaPlugin extends PluginBase {
	getCommand(_name: string): PluginCommand;
	getConfig(): FileConfiguration;
	getDataFolder(): File;
	getDefaultWorldGenerator(worldName: string, id: string): ChunkGenerator;
	getDescription(): PluginDescriptionFile;
	getLogger(): Logger;
	getName(): string;
	getPluginLoader(): PluginLoader;
	getResource(filename: string): InputStream;
	getServer(): Server;
	isEnabled(): boolean;
	isNaggable(): boolean;
	onCommand(sender: CommandSender, command: Command, label: string, args: Array<string>): boolean;
	onDisable(): void;
	onEnable(): void;
	onLoad(): void;
	onTabComplete(sender: CommandSender, command: Command, alias: string, args: Array<string>): Array<string>;
	reloadConfig(): void;
	saveConfig(): void;
	saveDefaultConfig(): void;
	saveResource(resourcePath: string, replace: boolean): void;
	setNaggable(canNag: boolean): void;
}

export default class JavaPlugin {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.plugin.java.JavaPlugin');
	}
	public static $isInstance(obj: any): obj is JavaPlugin {
		return obj instanceof JavaPlugin.$javaClass;
	}

	constructor();
	constructor(...args: any[]) {
		return new JavaPlugin.$javaClass(...args);
	}

	public static getPlugin(clazz: Class): JavaPlugin;
	public static getPlugin(...args: any[]): any {
		return JavaPlugin.$javaClass.getPlugin(...args);
	}

	public static getProvidingPlugin(clazz: Class): JavaPlugin;
	public static getProvidingPlugin(...args: any[]): any {
		return JavaPlugin.$javaClass.getProvidingPlugin(...args);
	}

}

