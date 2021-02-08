declare var Java: any;
import CommandExecutionContext from '../../../../../com/pixlfox/scriptablemc/acf/CommandExecutionContext.js'

export default interface ContextResolver {
	getContext(c: CommandExecutionContext): any;
}

export default class ContextResolver {
	public static get $javaClass(): any {
		return Java.type('com.pixlfox.scriptablemc.acf.contexts.ContextResolver');
	}
	public static $isInstance(obj: any): obj is ContextResolver {
		return obj instanceof ContextResolver.$javaClass;
	}

}

