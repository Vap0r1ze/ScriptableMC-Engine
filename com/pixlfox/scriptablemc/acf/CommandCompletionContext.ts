declare var Java: any;
import CommandIssuer from './CommandIssuer.js'

export default interface CommandCompletionContext {
	getConfig(): string;
	getConfig(key: string): string;
	getConfig(key: string, def: string): string;
	getConfigs(): any;
	getContextValue(clazz: any): any;
	getContextValue(clazz: any, paramIdx: any): any;
	getContextValueByName(clazz: any, _name: string): any;
	getInput(): string;
	getIssuer(): CommandIssuer;
	hasConfig(key: string): boolean;
	isAsync(): boolean;
}

export default class CommandCompletionContext {
	public static get $javaClass(): any {
		return Java.type('com.pixlfox.scriptablemc.acf.CommandCompletionContext');
	}
	public static $isInstance(obj: any): obj is CommandCompletionContext {
		return obj instanceof CommandCompletionContext.$javaClass;
	}

}

