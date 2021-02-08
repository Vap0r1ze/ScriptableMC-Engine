declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import ContextResolver from './contexts/ContextResolver.js'
import IssuerAwareContextResolver from './contexts/IssuerAwareContextResolver.js'
import IssuerOnlyContextResolver from './contexts/IssuerOnlyContextResolver.js'
import Object from '../../../../java/lang/Object.js'
import OptionalContextResolver from './contexts/OptionalContextResolver.js'
import String from '../../../../java/lang/String.js'

export default interface CommandContexts extends Object {
	getResolver(type: Class): ContextResolver;
	registerContext(context: Class, supplier: ContextResolver): void;
	registerIssuerAwareContext(context: Class, supplier: IssuerAwareContextResolver): void;
	registerIssuerOnlyContext(context: Class, supplier: IssuerOnlyContextResolver): void;
	registerOptionalContext(context: Class, supplier: OptionalContextResolver): void;
	registerSenderAwareContext(context: Class, supplier: IssuerAwareContextResolver): void;
}

export default class CommandContexts {
	public static get $javaClass(): any {
		return Java.type('com.pixlfox.scriptablemc.acf.CommandContexts');
	}
	public static $isInstance(obj: any): obj is CommandContexts {
		return obj instanceof CommandContexts.$javaClass;
	}

}

