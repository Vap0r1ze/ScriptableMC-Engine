declare var Java: any;
import Annotation from '../../../../java/lang/annotation/Annotation.js'
import BaseCommand from './BaseCommand.js'
import Class from '../../../../java/lang/Class.js'
import CommandIssuer from './CommandIssuer.js'
import CommandManager from './CommandManager.js'
import Object from '../../../../java/lang/Object.js'
import RegisteredCommand from './RegisteredCommand.js'
import String from '../../../../java/lang/String.js'

export default interface CommandOperationContext extends Object {
	getAnnotation(anno: Class): Annotation;
	getAnnotationValue(cls: Class): string;
	getAnnotationValue(cls: Class, options: number): string;
	getArgs(): Array<string>;
	getCommand(): BaseCommand;
	getCommandIssuer(): CommandIssuer;
	getCommandLabel(): string;
	getCommandManager(): CommandManager;
	getRegisteredCommand(): RegisteredCommand;
	hasAnnotation(anno: Class): boolean;
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

