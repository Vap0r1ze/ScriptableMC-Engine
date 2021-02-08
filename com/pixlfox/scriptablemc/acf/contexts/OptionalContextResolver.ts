declare var Java: any;
import CommandExecutionContext from '../../../../../com/pixlfox/scriptablemc/acf/CommandExecutionContext.js'
import ContextResolver from './ContextResolver.js'

export default interface OptionalContextResolver extends ContextResolver {
	getContext(c: CommandExecutionContext): any;
}

export default class OptionalContextResolver {
	public static get $javaClass(): any {
		return Java.type('com.pixlfox.scriptablemc.acf.contexts.OptionalContextResolver');
	}
	public static $isInstance(obj: any): obj is OptionalContextResolver {
		return obj instanceof OptionalContextResolver.$javaClass;
	}

}

