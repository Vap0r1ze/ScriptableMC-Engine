declare var Java: any;

export default interface CommandReplacements {
	addReplacement(key: string, val: string): string;
	addReplacements(replacements: Array<string>): void;
	replace(text: string): string;
}

export default class CommandReplacements {
	public static get $javaClass(): any {
		return Java.type('com.pixlfox.scriptablemc.acf.CommandReplacements');
	}
	public static $isInstance(obj: any): obj is CommandReplacements {
		return obj instanceof CommandReplacements.$javaClass;
	}

}

