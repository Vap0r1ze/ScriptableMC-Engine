declare var Java: any;
import BukkitCommandManager from './BukkitCommandManager.js'
import CommandIssuer from './CommandIssuer.js'
import File from '../../../../java/io/File.js'
import FileConfiguration from '../../../../org/bukkit/configuration/file/FileConfiguration.js'
import Locales from './Locales.js'

export default interface BukkitLocales extends Locales {
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
	loadLanguage(config: FileConfiguration, locale: any): boolean;
	loadLanguages(): void;
	loadMissingBundles(): void;
	loadYamlLanguageFile(file: string, locale: any): boolean;
	loadYamlLanguageFile(file: File, locale: any): boolean;
	replaceI18NStrings(message: string): string;
	setDefaultLocale(locale: any): any;
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

	public static get AFRIKAANS(): any {
		return BukkitLocales.$javaClass.AFRIKAANS;
	}

	public static get ARABIC(): any {
		return BukkitLocales.$javaClass.ARABIC;
	}

	public static get BULGARIAN(): any {
		return BukkitLocales.$javaClass.BULGARIAN;
	}

	public static get CHINESE(): any {
		return BukkitLocales.$javaClass.CHINESE;
	}

	public static get CZECH(): any {
		return BukkitLocales.$javaClass.CZECH;
	}

	public static get DANISH(): any {
		return BukkitLocales.$javaClass.DANISH;
	}

	public static get DUTCH(): any {
		return BukkitLocales.$javaClass.DUTCH;
	}

	public static get ENGLISH(): any {
		return BukkitLocales.$javaClass.ENGLISH;
	}

	public static get FINNISH(): any {
		return BukkitLocales.$javaClass.FINNISH;
	}

	public static get FRENCH(): any {
		return BukkitLocales.$javaClass.FRENCH;
	}

	public static get GERMAN(): any {
		return BukkitLocales.$javaClass.GERMAN;
	}

	public static get GREEK(): any {
		return BukkitLocales.$javaClass.GREEK;
	}

	public static get HEBREW(): any {
		return BukkitLocales.$javaClass.HEBREW;
	}

	public static get HINDI(): any {
		return BukkitLocales.$javaClass.HINDI;
	}

	public static get HUNGARIAN(): any {
		return BukkitLocales.$javaClass.HUNGARIAN;
	}

	public static get ITALIAN(): any {
		return BukkitLocales.$javaClass.ITALIAN;
	}

	public static get JAPANESE(): any {
		return BukkitLocales.$javaClass.JAPANESE;
	}

	public static get KOREAN(): any {
		return BukkitLocales.$javaClass.KOREAN;
	}

	public static get LATIN(): any {
		return BukkitLocales.$javaClass.LATIN;
	}

	public static get NORWEGIAN_BOKMAAL(): any {
		return BukkitLocales.$javaClass.NORWEGIAN_BOKMAAL;
	}

	public static get NORWEGIAN_NYNORSK(): any {
		return BukkitLocales.$javaClass.NORWEGIAN_NYNORSK;
	}

	public static get POLISH(): any {
		return BukkitLocales.$javaClass.POLISH;
	}

	public static get PORTUGUESE(): any {
		return BukkitLocales.$javaClass.PORTUGUESE;
	}

	public static get ROMANIAN(): any {
		return BukkitLocales.$javaClass.ROMANIAN;
	}

	public static get RUSSIAN(): any {
		return BukkitLocales.$javaClass.RUSSIAN;
	}

	public static get SIMPLIFIED_CHINESE(): any {
		return BukkitLocales.$javaClass.SIMPLIFIED_CHINESE;
	}

	public static get SPANISH(): any {
		return BukkitLocales.$javaClass.SPANISH;
	}

	public static get SWEDISH(): any {
		return BukkitLocales.$javaClass.SWEDISH;
	}

	public static get THAI(): any {
		return BukkitLocales.$javaClass.THAI;
	}

	public static get TRADITIONAL_CHINESE(): any {
		return BukkitLocales.$javaClass.TRADITIONAL_CHINESE;
	}

	public static get TURKISH(): any {
		return BukkitLocales.$javaClass.TURKISH;
	}

	public static get UKRANIAN(): any {
		return BukkitLocales.$javaClass.UKRANIAN;
	}

	public static get VIETNAMESE(): any {
		return BukkitLocales.$javaClass.VIETNAMESE;
	}

	public static get WELSH(): any {
		return BukkitLocales.$javaClass.WELSH;
	}

}

