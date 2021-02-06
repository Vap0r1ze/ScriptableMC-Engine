declare var Java: any;
import ScriptEngineConfig from './ScriptEngineConfig.js'

export default interface ScriptEngineDebuggerConfig {
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

