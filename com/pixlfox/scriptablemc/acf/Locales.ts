declare var Java: any;
import CommandIssuer from './CommandIssuer.js'
import CommandManager from './CommandManager.js'

export default interface Locales {
	addBundleClassLoader(classLoader: any): boolean;
	addMessage(locale: any, key: any, message: string): string;
	addMessageBundle(bundleName: string, locale: any): boolean;
	addMessageBundle(classLoader: any, bundleName: string, locale: any): boolean;
	addMessageBundles(bundleNames: Array<string>): void;
	addMessageStrings(locale: any, messages: any): void;
	addMessages(locale: any, messages: any): void;
	getDefaultLocale(): any;
	getMessage(issuer: CommandIssuer, key: any): string;
	getOptionalMessage(issuer: CommandIssuer, key: any): string;
	loadLanguages(): void;
	loadMissingBundles(): void;
	replaceI18NStrings(message: string): string;
	setDefaultLocale(locale: any): any;
}

export default class Locales {
	public static get $javaClass(): any {
		return Java.type('com.pixlfox.scriptablemc.acf.Locales');
	}
	public static $isInstance(obj: any): obj is Locales {
		return obj instanceof Locales.$javaClass;
	}

	constructor(manager: CommandManager);
	constructor(...args: any[]) {
		return new Locales.$javaClass(...args);
	}

	public static get AFRIKAANS(): any {
		return Locales.$javaClass.AFRIKAANS;
	}

	public static get ARABIC(): any {
		return Locales.$javaClass.ARABIC;
	}

	public static get BULGARIAN(): any {
		return Locales.$javaClass.BULGARIAN;
	}

	public static get CHINESE(): any {
		return Locales.$javaClass.CHINESE;
	}

	public static get CZECH(): any {
		return Locales.$javaClass.CZECH;
	}

	public static get DANISH(): any {
		return Locales.$javaClass.DANISH;
	}

	public static get DUTCH(): any {
		return Locales.$javaClass.DUTCH;
	}

	public static get ENGLISH(): any {
		return Locales.$javaClass.ENGLISH;
	}

	public static get FINNISH(): any {
		return Locales.$javaClass.FINNISH;
	}

	public static get FRENCH(): any {
		return Locales.$javaClass.FRENCH;
	}

	public static get GERMAN(): any {
		return Locales.$javaClass.GERMAN;
	}

	public static get GREEK(): any {
		return Locales.$javaClass.GREEK;
	}

	public static get HEBREW(): any {
		return Locales.$javaClass.HEBREW;
	}

	public static get HINDI(): any {
		return Locales.$javaClass.HINDI;
	}

	public static get HUNGARIAN(): any {
		return Locales.$javaClass.HUNGARIAN;
	}

	public static get ITALIAN(): any {
		return Locales.$javaClass.ITALIAN;
	}

	public static get JAPANESE(): any {
		return Locales.$javaClass.JAPANESE;
	}

	public static get KOREAN(): any {
		return Locales.$javaClass.KOREAN;
	}

	public static get LATIN(): any {
		return Locales.$javaClass.LATIN;
	}

	public static get NORWEGIAN_BOKMAAL(): any {
		return Locales.$javaClass.NORWEGIAN_BOKMAAL;
	}

	public static get NORWEGIAN_NYNORSK(): any {
		return Locales.$javaClass.NORWEGIAN_NYNORSK;
	}

	public static get POLISH(): any {
		return Locales.$javaClass.POLISH;
	}

	public static get PORTUGUESE(): any {
		return Locales.$javaClass.PORTUGUESE;
	}

	public static get ROMANIAN(): any {
		return Locales.$javaClass.ROMANIAN;
	}

	public static get RUSSIAN(): any {
		return Locales.$javaClass.RUSSIAN;
	}

	public static get SIMPLIFIED_CHINESE(): any {
		return Locales.$javaClass.SIMPLIFIED_CHINESE;
	}

	public static get SPANISH(): any {
		return Locales.$javaClass.SPANISH;
	}

	public static get SWEDISH(): any {
		return Locales.$javaClass.SWEDISH;
	}

	public static get THAI(): any {
		return Locales.$javaClass.THAI;
	}

	public static get TRADITIONAL_CHINESE(): any {
		return Locales.$javaClass.TRADITIONAL_CHINESE;
	}

	public static get TURKISH(): any {
		return Locales.$javaClass.TURKISH;
	}

	public static get UKRANIAN(): any {
		return Locales.$javaClass.UKRANIAN;
	}

	public static get VIETNAMESE(): any {
		return Locales.$javaClass.VIETNAMESE;
	}

	public static get WELSH(): any {
		return Locales.$javaClass.WELSH;
	}

}

