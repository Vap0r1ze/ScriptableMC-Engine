declare var Java: any;
import CommandIssuer from './CommandIssuer.js'
import CommandManager from './CommandManager.js'
import HelpEntry from './HelpEntry.js'
import RootCommand from './RootCommand.js'

export default interface CommandHelp {
	getCommandName(): string;
	getCommandPrefix(): string;
	getHelpEntries(): Array<HelpEntry>;
	getIssuer(): CommandIssuer;
	getManager(): CommandManager;
	getPage(): number;
	getPerPage(): number;
	getSearch(): Array<string>;
	getSelectedEntry(): any;
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

