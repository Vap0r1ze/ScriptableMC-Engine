declare var Java: any;
import CommandIssuer from './CommandIssuer.js'

export default interface RegisteredCommand {
	addSubcommand(cmd: string): void;
	addSubcommands(cmd: Array<any>): void;
	getAnnotation(annotation: any): any;
	getCommand(): string;
	getHelpText(): string;
	getPermission(): string;
	getPrefSubCommand(): string;
	getRequiredPermissions(): any;
	getSyntaxText(): string;
	getSyntaxText(issuer: CommandIssuer): string;
	isPrivate(): boolean;
	postCommand(): void;
	preCommand(): void;
	requiresPermission(permission: string): boolean;
}

export default class RegisteredCommand {
	public static get $javaClass(): any {
		return Java.type('com.pixlfox.scriptablemc.acf.RegisteredCommand');
	}
	public static $isInstance(obj: any): obj is RegisteredCommand {
		return obj instanceof RegisteredCommand.$javaClass;
	}

}

