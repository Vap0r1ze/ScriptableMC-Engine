declare var Java: any;
import CommandIssuer from './CommandIssuer.js'

export default interface ConditionContext {
	getConfig(): string;
	getConfigValue(flag: string, def: string): string;
	getConfigValue(flag: string, def: any): any;
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

