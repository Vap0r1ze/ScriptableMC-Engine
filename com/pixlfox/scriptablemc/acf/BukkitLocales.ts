declare var Java: any;
import BukkitCommandManager from './BukkitCommandManager.js'
import Class from '../../../../java/lang/Class.js'
import ClassLoader from '../../../../java/lang/ClassLoader.js'
import CommandIssuer from './CommandIssuer.js'
import File from '../../../../java/io/File.js'
import FileConfiguration from '../../../../org/bukkit/configuration/file/FileConfiguration.js'
import Locale from '../../../../java/util/Locale.js'
import Locales from './Locales.js'
import Map from '../../../../java/util/Map.js'
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'

export default interface BukkitLocales extends Locales {
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
	loadLanguage(config: FileConfiguration, locale: Locale): boolean;
	loadLanguages(): void;
	loadMissingBundles(): void;
	loadYamlLanguageFile(file: string, locale: Locale): boolean;
	loadYamlLanguageFile(file: File, locale: Locale): boolean;
	replaceI18NStrings(message: string): string;
	setDefaultLocale(locale: Locale): Locale;
}

export default class BukkitLocales {
	public static get $javaClass(): any {
		return Java.type('com.pixlfox.scriptablemc.acf.BukkitLocales');
	}
	public static $isInstance(obj: any): obj is BukkitLocales {
		return obj instanceof BukkitLocales.$javaClass;
	}

	constructor(manager: BukkitCommandManager);
	constructor(...args: any[]) {
		return new BukkitLocales.$javaClass(...args);
	}

	public static get AFRIKAANS(): Locale {
		return BukkitLocales.$javaClass.AFRIKAANS;
	}

	public static get ARABIC(): Locale {
		return BukkitLocales.$javaClass.ARABIC;
	}

	public static get BULGARIAN(): Locale {
		return BukkitLocales.$javaClass.BULGARIAN;
	}

	public static get CHINESE(): Locale {
		return BukkitLocales.$javaClass.CHINESE;
	}

	public static get CZECH(): Locale {
		return BukkitLocales.$javaClass.CZECH;
	}

	public static get DANISH(): Locale {
		return BukkitLocales.$javaClass.DANISH;
	}

	public static get DUTCH(): Locale {
		return BukkitLocales.$javaClass.DUTCH;
	}

	public static get ENGLISH(): Locale {
		return BukkitLocales.$javaClass.ENGLISH;
	}

	public static get FINNISH(): Locale {
		return BukkitLocales.$javaClass.FINNISH;
	}

	public static get FRENCH(): Locale {
		return BukkitLocales.$javaClass.FRENCH;
	}

	public static get GERMAN(): Locale {
		return BukkitLocales.$javaClass.GERMAN;
	}

	public static get GREEK(): Locale {
		return BukkitLocales.$javaClass.GREEK;
	}

	public static get HEBREW(): Locale {
		return BukkitLocales.$javaClass.HEBREW;
	}

	public static get HINDI(): Locale {
		return BukkitLocales.$javaClass.HINDI;
	}

	public static get HUNGARIAN(): Locale {
		return BukkitLocales.$javaClass.HUNGARIAN;
	}

	public static get ITALIAN(): Locale {
		return BukkitLocales.$javaClass.ITALIAN;
	}

	public static get JAPANESE(): Locale {
		return BukkitLocales.$javaClass.JAPANESE;
	}

	public static get KOREAN(): Locale {
		return BukkitLocales.$javaClass.KOREAN;
	}

	public static get LATIN(): Locale {
		return BukkitLocales.$javaClass.LATIN;
	}

	public static get NORWEGIAN_BOKMAAL(): Locale {
		return BukkitLocales.$javaClass.NORWEGIAN_BOKMAAL;
	}

	public static get NORWEGIAN_NYNORSK(): Locale {
		return BukkitLocales.$javaClass.NORWEGIAN_NYNORSK;
	}

	public static get POLISH(): Locale {
		return BukkitLocales.$javaClass.POLISH;
	}

	public static get PORTUGUESE(): Locale {
		return BukkitLocales.$javaClass.PORTUGUESE;
	}

	public static get ROMANIAN(): Locale {
		return BukkitLocales.$javaClass.ROMANIAN;
	}

	public static get RUSSIAN(): Locale {
		return BukkitLocales.$javaClass.RUSSIAN;
	}

	public static get SIMPLIFIED_CHINESE(): Locale {
		return BukkitLocales.$javaClass.SIMPLIFIED_CHINESE;
	}

	public static get SPANISH(): Locale {
		return BukkitLocales.$javaClass.SPANISH;
	}

	public static get SWEDISH(): Locale {
		return BukkitLocales.$javaClass.SWEDISH;
	}

	public static get THAI(): Locale {
		return BukkitLocales.$javaClass.THAI;
	}

	public static get TRADITIONAL_CHINESE(): Locale {
		return BukkitLocales.$javaClass.TRADITIONAL_CHINESE;
	}

	public static get TURKISH(): Locale {
		return BukkitLocales.$javaClass.TURKISH;
	}

	public static get UKRANIAN(): Locale {
		return BukkitLocales.$javaClass.UKRANIAN;
	}

	public static get VIETNAMESE(): Locale {
		return BukkitLocales.$javaClass.VIETNAMESE;
	}

	public static get WELSH(): Locale {
		return BukkitLocales.$javaClass.WELSH;
	}

}

