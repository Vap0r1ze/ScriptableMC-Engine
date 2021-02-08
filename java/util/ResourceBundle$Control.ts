declare var Java: any;
import Class from '../../java/lang/Class.js'
import ClassLoader from '../../java/lang/ClassLoader.js'
import List from './List.js'
import Locale from './Locale.js'
import Object from '../../java/lang/Object.js'
import ResourceBundle from './ResourceBundle.js'
import String from '../../java/lang/String.js'

export default interface ResourceBundle$Control extends Object {
	getCandidateLocales(arg0: string, arg1: Locale): Array<Locale>;
	getFallbackLocale(arg0: string, arg1: Locale): Locale;
	getFormats(arg0: string): Array<string>;
	getTimeToLive(arg0: string, arg1: Locale): number;
	needsReload(arg0: string, arg1: Locale, arg2: string, arg3: ClassLoader, arg4: ResourceBundle, arg5: number): boolean;
	newBundle(arg0: string, arg1: Locale, arg2: string, arg3: ClassLoader, arg4: boolean): ResourceBundle;
	toBundleName(arg0: string, arg1: Locale): string;
	toResourceName(arg0: string, arg1: string): string;
}

export default class ResourceBundle$Control {
	public static get $javaClass(): any {
		return Java.type('java.util.ResourceBundle$Control');
	}
	public static $isInstance(obj: any): obj is ResourceBundle$Control {
		return obj instanceof ResourceBundle$Control.$javaClass;
	}

	public static get FORMAT_CLASS(): Array<any> {
		return ResourceBundle$Control.$javaClass.FORMAT_CLASS;
	}

	public static get FORMAT_DEFAULT(): Array<any> {
		return ResourceBundle$Control.$javaClass.FORMAT_DEFAULT;
	}

	public static get FORMAT_PROPERTIES(): Array<any> {
		return ResourceBundle$Control.$javaClass.FORMAT_PROPERTIES;
	}

	public static get TTL_DONT_CACHE(): number {
		return ResourceBundle$Control.$javaClass.TTL_DONT_CACHE;
	}

	public static get TTL_NO_EXPIRATION_CONTROL(): number {
		return ResourceBundle$Control.$javaClass.TTL_NO_EXPIRATION_CONTROL;
	}

	public static getControl(arg0: Array<any>): ResourceBundle$Control;
	public static getControl(...args: any[]): any {
		return ResourceBundle$Control.$javaClass.getControl(...args);
	}

	public static getNoFallbackControl(arg0: Array<any>): ResourceBundle$Control;
	public static getNoFallbackControl(...args: any[]): any {
		return ResourceBundle$Control.$javaClass.getNoFallbackControl(...args);
	}

}

