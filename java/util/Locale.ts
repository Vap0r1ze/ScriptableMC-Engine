declare var Java: any;
import Class from '../../java/lang/Class.js'
import Cloneable from '../../java/lang/Cloneable.js'
import Collection from './Collection.js'
import List from './List.js'
import Locale$Category from './Locale$Category.js'
import Locale$FilteringMode from './Locale$FilteringMode.js'
import Object from '../../java/lang/Object.js'
import Serializable from '../../java/io/Serializable.js'
import Set from './Set.js'
import String from '../../java/lang/String.js'

export default interface Locale extends Object, Cloneable, Serializable {
	clone(): Object;
	getCountry(): string;
	getDisplayCountry(): string;
	getDisplayCountry(arg0: Locale): string;
	getDisplayLanguage(): string;
	getDisplayLanguage(arg0: Locale): string;
	getDisplayName(): string;
	getDisplayName(arg0: Locale): string;
	getDisplayScript(): string;
	getDisplayScript(arg0: Locale): string;
	getDisplayVariant(): string;
	getDisplayVariant(arg0: Locale): string;
	getExtension(arg0: string): string;
	getExtensionKeys(): Set;
	getISO3Country(): string;
	getISO3Language(): string;
	getLanguage(): string;
	getScript(): string;
	getUnicodeLocaleAttributes(): Set;
	getUnicodeLocaleKeys(): Set;
	getUnicodeLocaleType(arg0: string): string;
	getVariant(): string;
	hasExtensions(): boolean;
	stripExtensions(): Locale;
	toLanguageTag(): string;
}

export default class Locale {
	public static get $javaClass(): any {
		return Java.type('java.util.Locale');
	}
	public static $isInstance(obj: any): obj is Locale {
		return obj instanceof Locale.$javaClass;
	}

	constructor(arg0: string);
	constructor(arg0: string, arg1: string);
	constructor(arg0: string, arg1: string, arg2: string);
	constructor(...args: any[]) {
		return new Locale.$javaClass(...args);
	}

	public static get CANADA(): Locale {
		return Locale.$javaClass.CANADA;
	}

	public static get CANADA_FRENCH(): Locale {
		return Locale.$javaClass.CANADA_FRENCH;
	}

	public static get CHINA(): Locale {
		return Locale.$javaClass.CHINA;
	}

	public static get CHINESE(): Locale {
		return Locale.$javaClass.CHINESE;
	}

	public static get ENGLISH(): Locale {
		return Locale.$javaClass.ENGLISH;
	}

	public static get FRANCE(): Locale {
		return Locale.$javaClass.FRANCE;
	}

	public static get FRENCH(): Locale {
		return Locale.$javaClass.FRENCH;
	}

	public static get GERMAN(): Locale {
		return Locale.$javaClass.GERMAN;
	}

	public static get GERMANY(): Locale {
		return Locale.$javaClass.GERMANY;
	}

	public static get ITALIAN(): Locale {
		return Locale.$javaClass.ITALIAN;
	}

	public static get ITALY(): Locale {
		return Locale.$javaClass.ITALY;
	}

	public static get JAPAN(): Locale {
		return Locale.$javaClass.JAPAN;
	}

	public static get JAPANESE(): Locale {
		return Locale.$javaClass.JAPANESE;
	}

	public static get KOREA(): Locale {
		return Locale.$javaClass.KOREA;
	}

	public static get KOREAN(): Locale {
		return Locale.$javaClass.KOREAN;
	}

	public static get PRC(): Locale {
		return Locale.$javaClass.PRC;
	}

	public static get PRIVATE_USE_EXTENSION(): string {
		return Locale.$javaClass.PRIVATE_USE_EXTENSION;
	}

	public static get ROOT(): Locale {
		return Locale.$javaClass.ROOT;
	}

	public static get SIMPLIFIED_CHINESE(): Locale {
		return Locale.$javaClass.SIMPLIFIED_CHINESE;
	}

	public static get TAIWAN(): Locale {
		return Locale.$javaClass.TAIWAN;
	}

	public static get TRADITIONAL_CHINESE(): Locale {
		return Locale.$javaClass.TRADITIONAL_CHINESE;
	}

	public static get UK(): Locale {
		return Locale.$javaClass.UK;
	}

	public static get UNICODE_LOCALE_EXTENSION(): string {
		return Locale.$javaClass.UNICODE_LOCALE_EXTENSION;
	}

	public static get US(): Locale {
		return Locale.$javaClass.US;
	}

	public static filter(arg0: Array<any>, arg1: Array<any>): Array<Locale>;
	public static filter(arg0: Array<any>, arg1: Array<any>, arg2: Locale$FilteringMode): Array<Locale>;
	public static filter(...args: any[]): any {
		return Locale.$javaClass.filter(...args);
	}

	public static filterTags(arg0: Array<any>, arg1: Array<any>): Array<string>;
	public static filterTags(arg0: Array<any>, arg1: Array<any>, arg2: Locale$FilteringMode): Array<string>;
	public static filterTags(...args: any[]): any {
		return Locale.$javaClass.filterTags(...args);
	}

	public static forLanguageTag(arg0: string): Locale;
	public static forLanguageTag(...args: any[]): any {
		return Locale.$javaClass.forLanguageTag(...args);
	}

	public static getAvailableLocales(): Array<Locale>;
	public static getAvailableLocales(...args: any[]): any {
		return Locale.$javaClass.getAvailableLocales(...args);
	}

	public static getDefault(): Locale;
	public static getDefault(arg0: Locale$Category): Locale;
	public static getDefault(...args: any[]): any {
		return Locale.$javaClass.getDefault(...args);
	}

	public static getISOCountries(): Array<string>;
	public static getISOCountries(...args: any[]): any {
		return Locale.$javaClass.getISOCountries(...args);
	}

	public static getISOLanguages(): Array<string>;
	public static getISOLanguages(...args: any[]): any {
		return Locale.$javaClass.getISOLanguages(...args);
	}

	public static lookup(arg0: Array<any>, arg1: Array<any>): Locale;
	public static lookup(...args: any[]): any {
		return Locale.$javaClass.lookup(...args);
	}

	public static lookupTag(arg0: Array<any>, arg1: Array<any>): string;
	public static lookupTag(...args: any[]): any {
		return Locale.$javaClass.lookupTag(...args);
	}

	public static setDefault(arg0: Locale): void;
	public static setDefault(arg0: Locale$Category, arg1: Locale): void;
	public static setDefault(...args: any[]): any {
		return Locale.$javaClass.setDefault(...args);
	}

}

