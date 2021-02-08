declare var Java: any;
import CommandExecutionContext from '../../../../../com/pixlfox/scriptablemc/acf/CommandExecutionContext.js'
import ContextResolver from './ContextResolver.js'
import Object from '../../../../../java/lang/Object.js'

export default interface IssuerAwareContextResolver extends ContextResolver {
	getContext(c: CommandExecutionContext): Object;
}

export default class IssuerAwareContextResolver {
	public static get $javaClass(): any {
		return Java.type('com.pixlfox.scriptablemc.acf.contexts.IssuerAwareContextResolver');
	}
	public static $isInstance(obj: any): obj is IssuerAwareContextResolver {
		return obj instanceof IssuerAwareContextResolver.$javaClass;
	}

}

