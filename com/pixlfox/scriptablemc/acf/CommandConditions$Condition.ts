declare var Java: any;
import ConditionContext from './ConditionContext.js'

export default interface CommandConditions$Condition {
	validateCondition(context: ConditionContext): void;
}

export default class CommandConditions$Condition {
	public static get $javaClass(): any {
		return Java.type('com.pixlfox.scriptablemc.acf.CommandConditions$Condition');
	}
	public static $isInstance(obj: any): obj is CommandConditions$Condition {
		return obj instanceof CommandConditions$Condition.$javaClass;
	}

}

