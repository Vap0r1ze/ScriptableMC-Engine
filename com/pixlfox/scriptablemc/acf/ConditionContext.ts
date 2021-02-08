declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import CommandIssuer from './CommandIssuer.js'
import Integer from '../../../../java/lang/Integer.js'
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'

export default interface ConditionContext extends Object {
	getConfig(): string;
	getConfigValue(flag: string, def: string): string;
	getConfigValue(flag: string, def: Integer): Integer;
	getIssuer(): CommandIssuer;
	hasConfig(flag: string): boolean;
}

export default class ConditionContext {
	public static get $javaClass(): any {
		return Java.type('com.pixlfox.scriptablemc.acf.ConditionContext');
	}
	public static $isInstance(obj: any): obj is ConditionContext {
		return obj instanceof ConditionContext.$javaClass;
	}

}

