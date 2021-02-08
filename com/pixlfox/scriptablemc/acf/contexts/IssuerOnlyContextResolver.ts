declare var Java: any;
import CommandExecutionContext from '../../../../../com/pixlfox/scriptablemc/acf/CommandExecutionContext.js'
import ContextResolver from './ContextResolver.js'

export default interface IssuerOnlyContextResolver extends ContextResolver {
	getContext(c: CommandExecutionContext): any;
}

export default class IssuerOnlyContextResolver {
	public static get $javaClass(): any {
		return Java.type('com.pixlfox.scriptablemc.acf.contexts.IssuerOnlyContextResolver');
	}
	public static $isInstance(obj: any): obj is IssuerOnlyContextResolver {
		return obj instanceof IssuerOnlyContextResolver.$javaClass;
	}

}

