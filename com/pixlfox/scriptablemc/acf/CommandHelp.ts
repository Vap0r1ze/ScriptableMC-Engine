declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import CommandIssuer from './CommandIssuer.js'
import CommandManager from './CommandManager.js'
import HelpEntry from './HelpEntry.js'
import List from '../../../../java/util/List.js'
import Object from '../../../../java/lang/Object.js'
import RootCommand from './RootCommand.js'
import Set from '../../../../java/util/Set.js'
import String from '../../../../java/lang/String.js'

export default interface CommandHelp extends Object {
	getCommandName(): string;
	getCommandPrefix(): string;
	getHelpEntries(): Array<HelpEntry>;
	getIssuer(): CommandIssuer;
	getManager(): CommandManager;
	getPage(): number;
	getPerPage(): number;
	getSearch(): Array<string>;
	getSelectedEntry(): Set;
	getTotalPages(): number;
	getTotalResults(): number;
	isLastPage(): boolean;
	isOnlyPage(): boolean;
	setPage(page: number): void;
	setPage(page: number, perPage: number): void;
	setPerPage(perPage: number): void;
	setSearch(search: Array<any>): void;
	showHelp(): void;
	showHelp(issuer: CommandIssuer): void;
	testExactMatch(command: string): boolean;
}

export default class CommandHelp {
	public static get $javaClass(): any {
		return Java.type('com.pixlfox.scriptablemc.acf.CommandHelp');
	}
	public static $isInstance(obj: any): obj is CommandHelp {
		return obj instanceof CommandHelp.$javaClass;
	}

	constructor(manager: CommandManager, rootCommand: RootCommand, issuer: CommandIssuer);
	constructor(...args: any[]) {
		return new CommandHelp.$javaClass(...args);
	}

}

