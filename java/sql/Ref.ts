declare var Java: any;

export default interface Ref {
	getBaseTypeName(): string;
	getObject(): any;
	getObject(arg0: any): any;
	setObject(arg0: any): void;
}

export default class Ref {
	public static get $javaClass(): any {
		return Java.type('java.sql.Ref');
	}
	public static $isInstance(obj: any): obj is Ref {
		return obj instanceof Ref.$javaClass;
	}

}

