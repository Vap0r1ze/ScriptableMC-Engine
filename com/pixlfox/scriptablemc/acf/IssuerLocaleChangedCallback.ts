declare var Java: any;
import CommandIssuer from './CommandIssuer.js'

export default interface IssuerLocaleChangedCallback {
	onIssuerLocaleChange(issuer: CommandIssuer, oldLocale: any, newLocale: any): void;
}

export default class IssuerLocaleChangedCallback {
	public static get $javaClass(): any {
		return Java.type('com.pixlfox.scriptablemc.acf.IssuerLocaleChangedCallback');
	}
	public static $isInstance(obj: any): obj is IssuerLocaleChangedCallback {
		return obj instanceof IssuerLocaleChangedCallback.$javaClass;
	}

}

