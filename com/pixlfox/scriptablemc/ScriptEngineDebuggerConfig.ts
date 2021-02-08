declare var Java: any;
import Class from '../../../java/lang/Class.js'
import Object from '../../../java/lang/Object.js'
import ScriptEngineConfig from './ScriptEngineConfig.js'
import String from '../../../java/lang/String.js'

export default interface ScriptEngineDebuggerConfig extends Object {
	getAddress(): string;
	getEnabled(): boolean;
	getWaitAttached(): boolean;
}

export default class ScriptEngineDebuggerConfig {
	public static get $javaClass(): any {
		return Java.type('com.pixlfox.scriptablemc.ScriptEngineDebuggerConfig');
	}
	public static $isInstance(obj: any): obj is ScriptEngineDebuggerConfig {
		return obj instanceof ScriptEngineDebuggerConfig.$javaClass;
	}

	constructor(config: ScriptEngineConfig);
	constructor(...args: any[]) {
		return new ScriptEngineDebuggerConfig.$javaClass(...args);
	}

}

