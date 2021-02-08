declare var Java: any;
import Class from '../../java/lang/Class.js'
import ClassLoader from '../../java/lang/ClassLoader.js'
import Enumeration from './Enumeration.js'
import Locale from './Locale.js'
import Object from '../../java/lang/Object.js'
import ResourceBundle$Control from './ResourceBundle$Control.js'
import Set from './Set.js'
import String from '../../java/lang/String.js'

export default interface ResourceBundle extends Object {
	containsKey(arg0: string): boolean;
	getBaseBundleName(): string;
	getKeys(): Enumeration;
	getLocale(): Locale;
	getObject(arg0: string): Object;
	getString(arg0: string): string;
	getStringArray(arg0: string): Array<string>;
	keySet(): Set;
}

export default class ResourceBundle {
	public static get $javaClass(): any {
		return Java.type('java.util.ResourceBundle');
	}
	public static $isInstance(obj: any): obj is ResourceBundle {
		return obj instanceof ResourceBundle.$javaClass;
	}

	constructor();
	constructor(...args: any[]) {
		return new ResourceBundle.$javaClass(...args);
	}

	public static clearCache(): void;
	public static clearCache(arg0: ClassLoader): void;
	public static clearCache(...args: any[]): any {
		return ResourceBundle.$javaClass.clearCache(...args);
	}

	public static getBundle(arg0: string): ResourceBundle;
	public static getBundle(arg0: string, arg1: ResourceBundle$Control): ResourceBundle;
	public static getBundle(arg0: string, arg1: Locale): ResourceBundle;
	public static getBundle(arg0: string, arg1: Locale, arg2: ClassLoader): ResourceBundle;
	public static getBundle(arg0: string, arg1: Locale, arg2: ResourceBundle$Control): ResourceBundle;
	public static getBundle(arg0: string, arg1: Locale, arg2: ClassLoader, arg3: ResourceBundle$Control): ResourceBundle;
	public static getBundle(...args: any[]): any {
		return ResourceBundle.$javaClass.getBundle(...args);
	}

}

