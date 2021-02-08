declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'

export default interface YamlConstructor {
	addTypeDescription(definition: any): any;
	checkData(): boolean;
	getData(): Object;
	getPropertyUtils(): any;
	getSingleData(type: Class): Object;
	isAllowDuplicateKeys(): boolean;
	isExplicitPropertyUtils(): boolean;
	isWrappedToRootException(): boolean;
	setAllowDuplicateKeys(allowDuplicateKeys: boolean): void;
	setComposer(composer: any): void;
	setPropertyUtils(propertyUtils: any): void;
	setWrappedToRootException(wrappedToRootException: boolean): void;
}

export default class YamlConstructor {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.configuration.file.YamlConstructor');
	}
	public static $isInstance(obj: any): obj is YamlConstructor {
		return obj instanceof YamlConstructor.$javaClass;
	}

	constructor();
	constructor(...args: any[]) {
		return new YamlConstructor.$javaClass(...args);
	}

	public static get undefinedConstructor(): any {
		return YamlConstructor.$javaClass.undefinedConstructor;
	}

}

