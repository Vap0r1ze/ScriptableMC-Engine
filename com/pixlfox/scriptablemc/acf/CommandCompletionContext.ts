declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import CommandIssuer from './CommandIssuer.js'
import Integer from '../../../../java/lang/Integer.js'
import Map from '../../../../java/util/Map.js'
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'

export default interface CommandCompletionContext extends Object {
	getConfig(): string;
	getConfig(key: string): string;
	getConfig(key: string, def: string): string;
	getConfigs(): Map;
	getContextValue(clazz: Class): Object;
	getContextValue(clazz: Class, paramIdx: Integer): Object;
	getContextValueByName(clazz: Class, _name: string): Object;
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

