declare var Java: any;
import ContextResolver from './contexts/ContextResolver.js'
import IssuerAwareContextResolver from './contexts/IssuerAwareContextResolver.js'
import IssuerOnlyContextResolver from './contexts/IssuerOnlyContextResolver.js'
import OptionalContextResolver from './contexts/OptionalContextResolver.js'

export default interface CommandContexts {
	getResolver(type: any): ContextResolver;
	registerContext(context: any, supplier: ContextResolver): void;
	registerIssuerAwareContext(context: any, supplier: IssuerAwareContextResolver): void;
	registerIssuerOnlyContext(context: any, supplier: IssuerOnlyContextResolver): void;
	registerOptionalContext(context: any, supplier: OptionalContextResolver): void;
	registerSenderAwareContext(context: any, supplier: IssuerAwareContextResolver): void;
}

export default class CommandContexts {
	public static get $javaClass(): any {
		return Java.type('com.pixlfox.scriptablemc.acf.CommandContexts');
	}
	public static $isInstance(obj: any): obj is CommandContexts {
		return obj instanceof CommandContexts.$javaClass;
	}

}

