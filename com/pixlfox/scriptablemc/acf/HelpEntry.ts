declare var Java: any;
import CommandIssuer from './CommandIssuer.js'
import CommandParameter from './CommandParameter.js'

export default interface HelpEntry {
	getCommand(): string;
	getCommandPrefix(): string;
	getDescription(): string;
	getParameterSyntax(): string;
	getParameterSyntax(issuer: CommandIssuer): string;
	getParameters(): Array<CommandParameter>;
	getSearchScore(): number;
	getSearchTags(): string;
	setSearchScore(searchScore: number): void;
	shouldShow(): boolean;
}

export default class HelpEntry {
	public static get $javaClass(): any {
		return Java.type('com.pixlfox.scriptablemc.acf.HelpEntry');
	}
	public static $isInstance(obj: any): obj is HelpEntry {
		return obj instanceof HelpEntry.$javaClass;
	}

}

