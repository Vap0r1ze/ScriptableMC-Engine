declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import CommandConditions$Condition from './CommandConditions$Condition.js'
import CommandConditions$ParameterCondition from './CommandConditions$ParameterCondition.js'
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'

export default interface CommandConditions extends Object {
	addCondition(id: string, handler: CommandConditions$Condition): CommandConditions$Condition;
	addCondition(clazz: Class, id: string, handler: CommandConditions$ParameterCondition): CommandConditions$ParameterCondition;
}

export default class CommandConditions {
	public static get $javaClass(): any {
		return Java.type('com.pixlfox.scriptablemc.acf.CommandConditions');
	}
	public static $isInstance(obj: any): obj is CommandConditions {
		return obj instanceof CommandConditions.$javaClass;
	}

}

