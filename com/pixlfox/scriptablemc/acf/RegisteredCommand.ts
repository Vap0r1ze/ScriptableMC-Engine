declare var Java: any;
import Annotation from '../../../../java/lang/annotation/Annotation.js'
import Class from '../../../../java/lang/Class.js'
import Collection from '../../../../java/util/Collection.js'
import CommandIssuer from './CommandIssuer.js'
import Object from '../../../../java/lang/Object.js'
import Set from '../../../../java/util/Set.js'
import String from '../../../../java/lang/String.js'

export default interface RegisteredCommand extends Object {
	addSubcommand(cmd: string): void;
	addSubcommands(cmd: Array<any>): void;
	getAnnotation(annotation: Class): Annotation;
	getCommand(): string;
	getHelpText(): string;
	getPermission(): string;
	getPrefSubCommand(): string;
	getRequiredPermissions(): Set;
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

