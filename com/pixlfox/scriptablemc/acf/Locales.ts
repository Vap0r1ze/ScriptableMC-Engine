declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import ClassLoader from '../../../../java/lang/ClassLoader.js'
import CommandIssuer from './CommandIssuer.js'
import CommandManager from './CommandManager.js'
import Locale from '../../../../java/util/Locale.js'
import Map from '../../../../java/util/Map.js'
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'

export default interface Locales extends Object {
	addBundleClassLoader(classLoader: ClassLoader): boolean;
	addMessage(locale: Locale, key: any, message: string): string;
	addMessageBundle(bundleName: string, locale: Locale): boolean;
	addMessageBundle(classLoader: ClassLoader, bundleName: string, locale: Locale): boolean;
	addMessageBundles(bundleNames: Array<string>): void;
	addMessageStrings(locale: Locale, messages: Map): void;
	addMessages(locale: Locale, messages: Map): void;
	getDefaultLocale(): Locale;
	getMessage(issuer: CommandIssuer, key: any): string;
	getOptionalMessage(issuer: CommandIssuer, key: any): string;
	loadLanguages(): void;
	loadMissingBundles(): void;
	replaceI18NStrings(message: string): string;
	setDefaultLocale(locale: Locale): Locale;
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

	public static get AFRIKAANS(): Locale {
		return Locales.$javaClass.AFRIKAANS;
	}

	public static get ARABIC(): Locale {
		return Locales.$javaClass.ARABIC;
	}

	public static get BULGARIAN(): Locale {
		return Locales.$javaClass.BULGARIAN;
	}

	public static get CHINESE(): Locale {
		return Locales.$javaClass.CHINESE;
	}

	public static get CZECH(): Locale {
		return Locales.$javaClass.CZECH;
	}

	public static get DANISH(): Locale {
		return Locales.$javaClass.DANISH;
	}

	public static get DUTCH(): Locale {
		return Locales.$javaClass.DUTCH;
	}

	public static get ENGLISH(): Locale {
		return Locales.$javaClass.ENGLISH;
	}

	public static get FINNISH(): Locale {
		return Locales.$javaClass.FINNISH;
	}

	public static get FRENCH(): Locale {
		return Locales.$javaClass.FRENCH;
	}

	public static get GERMAN(): Locale {
		return Locales.$javaClass.GERMAN;
	}

	public static get GREEK(): Locale {
		return Locales.$javaClass.GREEK;
	}

	public static get HEBREW(): Locale {
		return Locales.$javaClass.HEBREW;
	}

	public static get HINDI(): Locale {
		return Locales.$javaClass.HINDI;
	}

	public static get HUNGARIAN(): Locale {
		return Locales.$javaClass.HUNGARIAN;
	}

	public static get ITALIAN(): Locale {
		return Locales.$javaClass.ITALIAN;
	}

	public static get JAPANESE(): Locale {
		return Locales.$javaClass.JAPANESE;
	}

	public static get KOREAN(): Locale {
		return Locales.$javaClass.KOREAN;
	}

	public static get LATIN(): Locale {
		return Locales.$javaClass.LATIN;
	}

	public static get NORWEGIAN_BOKMAAL(): Locale {
		return Locales.$javaClass.NORWEGIAN_BOKMAAL;
	}

	public static get NORWEGIAN_NYNORSK(): Locale {
		return Locales.$javaClass.NORWEGIAN_NYNORSK;
	}

	public static get POLISH(): Locale {
		return Locales.$javaClass.POLISH;
	}

	public static get PORTUGUESE(): Locale {
		return Locales.$javaClass.PORTUGUESE;
	}

	public static get ROMANIAN(): Locale {
		return Locales.$javaClass.ROMANIAN;
	}

	public static get RUSSIAN(): Locale {
		return Locales.$javaClass.RUSSIAN;
	}

	public static get SIMPLIFIED_CHINESE(): Locale {
		return Locales.$javaClass.SIMPLIFIED_CHINESE;
	}

	public static get SPANISH(): Locale {
		return Locales.$javaClass.SPANISH;
	}

	public static get SWEDISH(): Locale {
		return Locales.$javaClass.SWEDISH;
	}

	public static get THAI(): Locale {
		return Locales.$javaClass.THAI;
	}

	public static get TRADITIONAL_CHINESE(): Locale {
		return Locales.$javaClass.TRADITIONAL_CHINESE;
	}

	public static get TURKISH(): Locale {
		return Locales.$javaClass.TURKISH;
	}

	public static get UKRANIAN(): Locale {
		return Locales.$javaClass.UKRANIAN;
	}

	public static get VIETNAMESE(): Locale {
		return Locales.$javaClass.VIETNAMESE;
	}

	public static get WELSH(): Locale {
		return Locales.$javaClass.WELSH;
	}

}

