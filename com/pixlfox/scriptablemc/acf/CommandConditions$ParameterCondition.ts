declare var Java: any;
import CommandExecutionContext from './CommandExecutionContext.js'
import ConditionContext from './ConditionContext.js'
import Object from '../../../../java/lang/Object.js'

export default interface CommandConditions$ParameterCondition {
	validateCondition(context: ConditionContext, execContext: CommandExecutionContext, value: Object): void;
}

export default class CommandConditions$ParameterCondition {
	public static get $javaClass(): any {
		return Java.type('com.pixlfox.scriptablemc.acf.CommandConditions$ParameterCondition');
	}
	public static $isInstance(obj: any): obj is CommandConditions$ParameterCondition {
		return obj instanceof CommandConditions$ParameterCondition.$javaClass;
	}

}

