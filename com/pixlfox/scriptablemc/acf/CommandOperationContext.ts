declare var Java: any;
import BaseCommand from './BaseCommand.js'
import CommandIssuer from './CommandIssuer.js'
import CommandManager from './CommandManager.js'
import RegisteredCommand from './RegisteredCommand.js'

export default interface CommandOperationContext {
	getAnnotation(anno: any): any;
	getAnnotationValue(cls: any): string;
	getAnnotationValue(cls: any, options: number): string;
	getArgs(): Array<string>;
	getCommand(): BaseCommand;
	getCommandIssuer(): CommandIssuer;
	getCommandLabel(): string;
	getCommandManager(): CommandManager;
	getRegisteredCommand(): RegisteredCommand;
	hasAnnotation(anno: any): boolean;
	isAsync(): boolean;
	setRegisteredCommand(registeredCommand: RegisteredCommand): void;
}

export default class CommandOperationContext {
	public static get $javaClass(): any {
		return Java.type('com.pixlfox.scriptablemc.acf.CommandOperationContext');
	}
	public static $isInstance(obj: any): obj is CommandOperationContext {
		return obj instanceof CommandOperationContext.$javaClass;
	}

}

