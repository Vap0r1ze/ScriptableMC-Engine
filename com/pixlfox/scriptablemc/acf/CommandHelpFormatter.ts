declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import CommandHelp from './CommandHelp.js'
import CommandIssuer from './CommandIssuer.js'
import CommandManager from './CommandManager.js'
import CommandParameter from './CommandParameter.js'
import HelpEntry from './HelpEntry.js'
import List from '../../../../java/util/List.js'
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'

export default interface CommandHelpFormatter extends Object {
	getEntryFormatReplacements(help: CommandHelp, entry: HelpEntry): Array<string>;
	getHeaderFooterFormatReplacements(help: CommandHelp): Array<string>;
	getParameterFormatReplacements(help: CommandHelp, param: CommandParameter, entry: HelpEntry): Array<string>;
	printDetailedHelpCommand(help: CommandHelp, issuer: CommandIssuer, entry: HelpEntry): void;
	printDetailedHelpFooter(help: CommandHelp, issuer: CommandIssuer, entry: HelpEntry): void;
	printDetailedHelpHeader(help: CommandHelp, issuer: CommandIssuer, entry: HelpEntry): void;
	printDetailedParameter(help: CommandHelp, issuer: CommandIssuer, entry: HelpEntry, param: CommandParameter): void;
	printHelpCommand(help: CommandHelp, issuer: CommandIssuer, entry: HelpEntry): void;
	printHelpFooter(help: CommandHelp, issuer: CommandIssuer): void;
	printHelpHeader(help: CommandHelp, issuer: CommandIssuer): void;
	printSearchEntry(help: CommandHelp, issuer: CommandIssuer, page: HelpEntry): void;
	printSearchFooter(help: CommandHelp, issuer: CommandIssuer): void;
	printSearchHeader(help: CommandHelp, issuer: CommandIssuer): void;
	showAllResults(commandHelp: CommandHelp, entries: Array<any>): void;
	showDetailedHelp(commandHelp: CommandHelp, entry: HelpEntry): void;
	showSearchResults(commandHelp: CommandHelp, entries: Array<any>): void;
}

export default class CommandHelpFormatter {
	public static get $javaClass(): any {
		return Java.type('com.pixlfox.scriptablemc.acf.CommandHelpFormatter');
	}
	public static $isInstance(obj: any): obj is CommandHelpFormatter {
		return obj instanceof CommandHelpFormatter.$javaClass;
	}

	constructor(manager: CommandManager);
	constructor(...args: any[]) {
		return new CommandHelpFormatter.$javaClass(...args);
	}

}

