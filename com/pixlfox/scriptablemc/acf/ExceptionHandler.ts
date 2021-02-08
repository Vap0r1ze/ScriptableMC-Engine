declare var Java: any;
import BaseCommand from './BaseCommand.js'
import CommandIssuer from './CommandIssuer.js'
import RegisteredCommand from './RegisteredCommand.js'

export default interface ExceptionHandler {
	execute(command: BaseCommand, registeredCommand: RegisteredCommand, sender: CommandIssuer, args: Array<any>, t: any): boolean;
}

export default class ExceptionHandler {
	public static get $javaClass(): any {
		return Java.type('com.pixlfox.scriptablemc.acf.ExceptionHandler');
	}
	public static $isInstance(obj: any): obj is ExceptionHandler {
		return obj instanceof ExceptionHandler.$javaClass;
	}

}

