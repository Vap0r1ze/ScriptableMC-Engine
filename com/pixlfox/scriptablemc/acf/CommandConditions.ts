declare var Java: any;
import CommandConditions$Condition from './CommandConditions$Condition.js'
import CommandConditions$ParameterCondition from './CommandConditions$ParameterCondition.js'

export default interface CommandConditions {
	addCondition(id: string, handler: CommandConditions$Condition): CommandConditions$Condition;
	addCondition(clazz: any, id: string, handler: CommandConditions$ParameterCondition): CommandConditions$ParameterCondition;
}

export default class CommandConditions {
	public static get $javaClass(): any {
		return Java.type('com.pixlfox.scriptablemc.acf.CommandConditions');
	}
	public static $isInstance(obj: any): obj is CommandConditions {
		return obj instanceof CommandConditions.$javaClass;
	}

}

